import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "../components/Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="Badge__avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredResults(result);
  }, [badges, query]);

  return [query, setQuery, filteredResults];
}

function BadgesList(props) {
  const badges = props.badges;

  const [query, setQuery, filteredResults] = useSearchBadges (badges);

  const filterContainer = (
    <div className="form-group">
      <label>Filter Badges</label>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );

  if (filteredResults.length === 0) {
    return (
      <div>
        {filterContainer}
        <h3>No badges were found</h3>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      {filterContainer}
      <ul className="list-unstyled">
        {filteredResults.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                to={`/badges/${badge.id}`}
                className="text-reset text-decoration-none"
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;

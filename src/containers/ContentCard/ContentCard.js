import { ResponsiveTable } from "../../components/ResponsiveTable/ResponsiveTable";

export const ContentCard = ({ data, searchField }) => {

  return (
    <div className="content-card">
      <div className="content-card__head">
        <h3>Login Sessions</h3>
        <div className="lastest">
          <select>
            <option>1 hours</option>
          </select>
          <button>
            View All
          </button>
        </div>
      </div>
      <ResponsiveTable data={data} searchField={searchField} />
    </div>
  );
};

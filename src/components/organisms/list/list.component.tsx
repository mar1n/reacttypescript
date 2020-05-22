import React from "react";
import {StyledList} from "./list.styles";

type ListProps = {
  data: any[];
};

const list = ({ data }: ListProps) => {
  return (
    <StyledList>
      {data.map((details) => (
        <div key={details.id} className="details">
          {details.name}
        </div>
      ))}
    </StyledList>
  );
};

export default list as React.FC<ListProps>;

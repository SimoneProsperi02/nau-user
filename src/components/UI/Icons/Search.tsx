import BaseIcon from "./BaseIcons";

const Search = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <BaseIcon {...props}>
      <svg stroke="#0d3b60">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </BaseIcon>
  );
};

export default Search;

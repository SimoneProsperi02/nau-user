export type TaxonomiesProps = {
  taxonomy: Array<string>;
};

class Taxonomy implements TaxonomiesProps {
  taxonomy;

  constructor(props: TaxonomiesProps) {
    this.taxonomy = props.taxonomy;
  }
}

export default Taxonomy;

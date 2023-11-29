export type ServiceProps = {
  _id: number;

  name: string;

  position: number;
};

class Service implements ServiceProps {
  _id;
  name;
  position;

  constructor(props: ServiceProps) {
    this._id = props._id;
    this.name = props.name;
    this.position = props.position;
  }
}

export default Service;

export enum cdlStatus {
  ISCRITTO = "I",
  TRASFERITO = "T",
  SOSPESO = "S",
  CANCELLATO = "C",
  RADIATO = "R",
}

export type UserProps = {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  cdl_status?: cdlStatus;
};

class User implements UserProps {
  id;
  email;
  first_name;
  last_name;
  role;
  cdl_status;

  constructor(props: UserProps) {
    this.id = props.id;
    this.email = props.email;
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.role = props.role;
    this.cdl_status = props.cdl_status;
  }
}

export default User;

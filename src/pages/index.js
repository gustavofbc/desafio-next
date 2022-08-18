// import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "react-modal";
// import ModalInfo from "../components/ModalInfo";

import { Container, Content } from "../styles/Home.module";

export default function Home() {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [userSelected, setUserSelected] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function openModal() {
    setModalIsOpen(true);
  }

  async function searchUserById(id) {
    const search = "https://jsonplaceholder.typicode.com/users/" + id;
    const user = await axios(search);
    setUserSelected(user.data);
    openModal();
    return user;
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);

    const fetchUsers = async () => {
      const usersDataBase = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(usersDataBase.data);
      setIsLoading(false);
    };
    fetchUsers();
  }, [setUsers, setIsLoading]);

  function handleTableHeader() {
    if (isLoading === false && users) {
      const dateUser = users[0];
      if (dateUser) {
        const headers = Object.keys(dateUser);
        return headers.map((attr) => {
          return <th key={attr}>{attr}</th>;
        });
      }
    }
  }

  function handleTable() {
    let filtros;

    if (Array.isArray(users)) {
      if (filter == "") {
        filtros = users;
      } else {
        filtros = users.filter((user) => {
          return (
            user.name.toUpperCase().startsWith(filter.toUpperCase()) ||
            user.address.city.toUpperCase().startsWith(filter.toUpperCase())
          );
        });
      }
      return Array.isArray(users)
        ? filtros.map((user) => {
            return (
              <tr key={user.id} onClick={() => searchUserById(user.id)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            );
          })
        : null;
    }
  }
  return isLoading ? (
    <h1>carregando...</h1>
  ) : (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div>
          <ul>
            <li key={userSelected.id}>{userSelected.name}</li>
            <li>{userSelected.username}</li>
            <li>{userSelected.email}</li>
            {/* <li>{userSelected.address}</li> */}
            <li>{userSelected.phone}</li>
            <li>{userSelected.website}</li>
            {/* <li>{userSelected.company}</li> */}
          </ul>
        </div>
        <button className="button close" onClick={closeModal}>
          Fechar
        </button>
      </Modal>
      <h1>Filter</h1>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by name or address:"
      />

      <Content>
        <table>
          <thead>
            <tr>{handleTableHeader()}</tr>
          </thead>
          <tbody>{handleTable()}</tbody>
        </table>
      </Content>
    </Container>
  );
}

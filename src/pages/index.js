// import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "react-modal";

import { Container, ModalContent, Content, Card } from "../styles/Home.module";

export default function Home() {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [userSelected, setUserSelected] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function searchUserById(id) {
    const search = "https://jsonplaceholder.typicode.com/users/" + id;
    const user = await axios(search);
    setUserSelected(user.data);
    openModal();
    return user;
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

  function handleCard() {
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

      if (isLoading === false && users) {
        return Array.isArray(filtros)
          ? filtros.map((user) => {
              return (
                <Card key={user.id} onClick={() => searchUserById(user.id)}>
                  <span>{user.id}</span>
                  <p>
                    Nome: <span>{user.name}</span>
                  </p>
                  <p>
                    Endereço: <span>{user.address.city}</span>
                  </p>
                </Card>
              );
            })
          : null;
      }
    }
  }

  function handleTable() {
    if (userSelected) {
      const keys = Object.keys(userSelected);
      return [userSelected].map((user) => {
        return (
          <tr key={user.id}>
            <td>
              <span>{keys[0]}:</span> {user.id}
            </td>
            <td>
              <span>{keys[1]}:</span> {user.name}
            </td>
            <td>
              <span>{keys[2]}:</span> {user.username}
            </td>
            <td>
              <span>{keys[3]}:</span> {user.email}
            </td>
            <td>
              <span>{keys[4]}:</span>
              {` ${user.address.street},
                ${user.address.suite},
                ${user.address.city},
                ${user.address.zipcode},
                ${user.address.geo.lat},
                ${user.address.geo.lat}`}
            </td>
            <td>
              <span>{keys[5]}:</span> {user.phone}
            </td>
            <td>
              <span>{keys[6]}:</span> {user.website}
            </td>
            <td>
              <span>{keys[7]}:</span>
              {` ${user.company.name},
                ${user.company.catchPhrase}
                ${user.company.bs}`}
            </td>
          </tr>
        );
      });
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
        <ModalContent>
          <table>
            <tbody>{handleTable()}</tbody>
          </table>
        </ModalContent>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
      <h1>Filter</h1>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by name or address:"
      />
      <Content>{handleCard()}</Content>
    </Container>
  );
}

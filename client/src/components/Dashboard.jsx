import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
// import Sidebar from "./Sidebar";

const Conversations_key = "Conversations";
const Contacts_key = "Contacts";

export default function Dashboard({ id }) {
  const [activeKey, setActiveKey] = useState(Conversations_key);
  const conversationsOpen = activeKey === Conversations_key;
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className="d-flex flex-column" style={{ width: "250px" }}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={Conversations_key}>ConverSation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={Contacts_key}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={Conversations_key}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={Contacts_key}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModal(true)}>
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModel={closeModal} />
        ) : (
          <NewContactModal closeModel={closeModal} />
        )}
      </Modal>
    </div>
  );
}

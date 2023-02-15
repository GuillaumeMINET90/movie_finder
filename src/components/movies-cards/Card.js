import React, { useState } from "react";
import { format } from 'date-fns'
import { Card, Image, Button, Header, Modal } from 'semantic-ui-react'
import './Card.scss'


const MovieCard = ({ title, poster_path, overview, release_date, vote_average }) => {

  const [open, setOpen] = useState(false)
  const handleShowModal = () => setOpen(true)

  const API_IMG = "https://image.tmdb.org/t/p/w500/"
  const notOverview = 'Il n\'y a pas de résumé pour cette vidéo pour le moment.'

  return (
    <div className="card-container">
      <Card className="card" onClick={handleShowModal}>

        <Image src={API_IMG + poster_path} wrapped   />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>Sorti le {format(new Date(release_date), 'dd/MM/yyyy')}</span>
          </Card.Meta>
        </Card.Content>

        <Card.Content extra>
          Note des internautes: {vote_average}
        </Card.Content>
      </Card>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Film populaire</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={API_IMG + poster_path} taille="large" />
          <Modal.Description>
            <Header>{title}</Header>
            <h5>Résumé</h5>
            <p className="overview-content">
              {overview ? overview : notOverview}
            </p>
            <br />
            <p>Sorti le &nbsp; {format(new Date(release_date), 'dd/MM/yyyy')}</p>
            <br />
            <p>Note des internautes: &nbsp; {vote_average} / 10</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Sortir
          </Button>
          <Button
            content="Yes je kiffe"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default MovieCard

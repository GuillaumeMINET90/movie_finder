import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu, Button, Form} from 'semantic-ui-react'


export default function NavBar ({searchMovie, query, handlerChange }) {
  const [state, setState] = useState()

  const handleItemClick = (e, { name }) => setState({ activeItem: name })



    return (
  
      <Menu pointing secondary >
        <Menu.Item
          as={NavLink}
          to={'/'}
          name='home'
          active={state === 'home'}
          content='Home'
          onClick={handleItemClick}
        />

        <Menu.Item
          as={NavLink}
          to={'/catalogue'}
          name='catalog'
          active={state === 'catalog'}
          content='Catalogue'
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Form style={{display:'flex'}} onSubmit={searchMovie}>
            <Menu.Item>
              <Input
                icon='search'
                placeholder='Rechercher un film'
                name="search"
                value={query}
                onChange={handlerChange}
              />
            </Menu.Item>
            <Menu.Item>
              <Button type='submit' circular color='green' icon>
                Go !!
              </Button>
            </Menu.Item>
          </Form>
        </Menu.Menu>

      </Menu>

    )
  
}
import React, { useEffect, useState } from 'react'
import { Form, Radio, Button } from 'semantic-ui-react'
import './Filters.scss'

export default function Filters({ setSelectedgenre }) {
    const [genres, setGenres] = useState([])

    const API_GENRE = "https://api.themoviedb.org/3/genre/movie/list?api_key=93d53087ea06d9fde3aa8d5701ac1c0a&language=fr-FR"


    useEffect(() => {
        fetch(API_GENRE)
            .then((res) => res.json())
            .then(data => setGenres(data.genres))
    }, [])

    return (
        <Form className='form-filter' >
            <div className='filter-header'>
                <span className='filter-title'>Filtrer les recherches</span>
                <Button
                    circular
                    onClick={(e) => console.log(e)}
                    floated='right'
                    icon='plus'
                />
            </div>
            <div className='form-items' >
                {
                    genres.map(genres => (
                        <Form.Field key={genres.id}>
                            <Radio
                                className='form-field'
                                key={genres.id}
                                id={genres.id}
                                label={genres.name}
                                name='radioGroup'
                                value={genres.name}
                                onChange={(e) => setSelectedgenre(e.target.id)}
                            />
                        </Form.Field>
                    )
                    )}
            </div>
        </Form>
    )
}

import React from "react";
import NavBar from "../components/navigation/NavBar"
import LogoSite from '../components/navigation/logo'
import {Grid} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={12}>

            <div className="container">
              <LogoSite />
              <NavBar />
              <h1>Home</h1>
              <div >

                <p>"MOVIES  <Icon style={{color: 'blue'}} name='world' />  FINDER" est un site de test d'API basé sur le modèle The Movie DB. Il n'a pour but que de tester les requêtes sur une BDD externe.
                </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate maiores vel enim quibusdam,
                  tempora quod nihil blanditiis natus odit modi nostrum eligendi! Sint earum enim illo, ducimus cumque
                  dicta quos hic laborum quisquam a saepe magnam sequi iste est. Fugit, cum! Iusto quas sequi laborum
                  rerum. Veniam ipsa dolor dicta corporis quisquam, officiis quis. Voluptatem, delectus quibusdam maxime
                  non natus minima ea harum quis, dolorem quisquam ipsum odit, voluptate id sit? Nostrum consectetur eligendi
                  accusamus pariatur vel veritatis deleniti labore, consequuntur, officiis ea blanditiis optio sint.
                  Porro similique reprehenderit fugiat ab illo nulla sunt laborum, molestiae suscipit eaque ipsam fuga temporibus quaerat, quos iusto, minus voluptas vero numquam praesentium veniam accusantium! Illum a, molestiae nihil atque, sunt beatae natus dolor praesentium modi excepturi sapiente aperiam debitis quaerat voluptatem vitae mollitia, facere voluptates dignissimos? Suscipit quia nesciunt autem aperiam voluptate culpa pariatur est earum obcaecati non laborum dignissimos cum officiis nobis nulla, vel recusandae ut soluta! Similique minus maxime, suscipit voluptate neque quisquam consequuntur minima voluptatum impedit labore reprehenderit fugiat, quibusdam ratione dolor, facilis dolores id accusantium iste dolorem iure facere quo. Officiis ratione alias incidunt eligendi porro rerum omnis ullam eaque sed, fuga, deleniti obcaecati magni perspiciatis iure provident.</p>

              </div>
            </div>

          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

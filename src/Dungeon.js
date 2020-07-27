import React from 'react';
import dungeonList from "./Mock/dungeonList.json"
import * as d3 from "d3";

export class DungeonView extends React.Component  {
    constructor(props) {
      super(props);
      var map = dungeonList[this.props.dungeonId].maps[0];
      this.state = {
          mapChoiceId: map.id
      };
      this.handleMapChange = this.handleMapChange.bind(this);
    }

    handleMapChange(mapId) {
        this.setState({
            mapChoiceId: mapId
        });
    }
  
    render() {
      var dungeonId = this.props.dungeonId;
      var dungeon = dungeonList[dungeonId];
    
      return (
        <div>
          <DungeonName name={dungeon.name}/>
          <MapChoice maps={dungeon.maps} onMapChange={this.handleMapChange}/>
          <MapRendering mapId={this.state.mapChoiceId} dungeon={dungeon}/>
        </div>
      );
    }
  }
  

export class DungeonName extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <h2>{name}</h2>
        )
    }
}

export class MapChoice extends React.Component {
    constructor(props) {
        super(props);
        this.handleMapChange = this.handleMapChange.bind(this);
    }

    handleMapChange(e) {
        this.props.onMapChange(e.target.value);
    }

    render() {
        var mapChoices = this.props.maps.map((element) => 
            <option value={element.id} key={element.id}>{element.name}</option>
        );
        return (
            <div>
                <label>Select a map</label>
                <br/>
                <select name="mapChoice" id="mapChoice" onChange={this.handleMapChange}>
                    {mapChoices}
                </select>
            </div>
        )
    }
}

export class MapRendering extends React.Component {
    
    getDungeonMapById(dungeon, mapId) {
        var map = null
        dungeon.maps.forEach(element => {
            if (element.id === mapId)
                map = element;
        });
        return map;
    }

    handleOnClickTest() {
        console.log("test");
    }

    render() {
        const map = this.getDungeonMapById(this.props.dungeon, this.props.mapId);
        return (
        <div>
            <div>Dungeon informations : {JSON.stringify(map)}</div>
            <svg width="1920" height="1080">
                <image href={map.img} alt={`${map.name}`}>
                    <circle r="20"></circle>
                </image>
                <g onClick={this.handleOnClickTest}>
                    <circle r="20"></circle>
                    <image href="http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png" x="100" y="100" height="50" width="50"></image>
                </g>
            </svg>
            
        </div>
        )
    }
}
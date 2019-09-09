export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results
      .map(this._transformPerson)
      // .slice(0, 5);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results
      .map(this._transformPlanet)
      .slice(0, 5);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);

    return res.results
      .map(this._transformStarship)
      // .slice(0, 5);
  };


  parseDate(str) {
    // var m = str.match(/^\d{4}(\-)([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))$/);
    // console.log(m)
    // return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
  }
  // =-========================

  transformOptions = (item, category) => {
    const id = this._extractId(item);
    const image = this.getImage((category === 'people' ? 'characters' : category), {id});
    const name = item.name ? item.name : item.title
    const defaultProps = {id, image, name}

    switch(category) {
      case 'films' :
        const created = item.created.split('T')[0];

        return {
          ...defaultProps, created,
          director: item.director,
          edited: item.edited,
          episodeId: item.episode_id,
          openingCrawl: item.opening_crawl,
          title: item.title,
          producer: item.producer,
          releaseDate: item.release_date,
        }

      case 'starships' :
        const crew = item.crew
        const length = item.length + 'm';

        return {
          ...defaultProps, crew, length,
          model: item.model,
          manufacturer: item.manufacturer,
          cls: item.starship_class,
          speed: item.max_atmosphering_speed,
          hyperdriveRating: item.hyperdrive_rating,
          mglt: item.MGLT,
          cargoCapacity: item.cargo_capacity,
          passengers: item.passengers
        }

      case 'people' :
        return {
          ...defaultProps,
          birthYear: item.birth_year,
          height: item.height,
          mass: item.mass,
          gender: item.gender,
          hairColor: item.hair_color,
          skinColor: item.skin_color
        }

      case 'species' :
        const averageLifespan = item.average_lifespan + ' years'
        const averageHeight = item.average_height + ' cm'
          
        return {
          ...defaultProps, averageLifespan, averageHeight,
          classification: item.classification,
          designation: item.designation,
          language: item.language,
          hairColors: item.hair_colors,
          skinColors: item.skin_colors,
          eyeColors: item.eye_colors,
        }

      case 'vehicles' :
        
      // Model: Digger Crawler
      // Manufacturer: Corellia Mining Corporation
      // Class: Wheeled
      // Cost: 150,000 credits
      // Speed: 30km/h
      // Length: 36.8m
      // Cargo Capacity: 50 metric tons
      // Mimimum Crew: 46
      // Passengers: 30
      // debugger
        return {
          // ...defaultProps, averageLifespan, averageHeight,
          // classification: item.classification,
          // designation: item.designation,
          // language: item.language,
          // hairColors: item.hair_colors,
          // skinColors: item.skin_colors,
          // eyeColors: item.eye_colors,
        }
    }
  }
  
  getObjects = async (category, page) => {
    
    const res = await this.getResource(`/${category}/?page=${page}`);

    return {
      ...res,
      results: res.results.map((item) => this.transformOptions(item, category))
    }
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  getImage = (category, {id}) => {
    return `${this._imageBase}/${category}/${id}.jpg`
  };

  getStarship = async (id, category) => {
    const item = await this.getResource(`/${category}/${id}/`);

    return this.transformOptions(item, category)
  };


  

  getThisUrl = async (url) => {
    console.log(url)
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    let gggg = await res.json();
    return {
      ...gggg,
      id: this._extractId(gggg)
    }

    
  };
}

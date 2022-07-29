class Multimedia {
//    url = '';
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }

    get url() {
        return this.getUrl;
    }

    set url(nueva_url) {
        return setUrl(nueva_url);
    }

    setInicio() {
        return 'Este metodo es para realizar un cambio en la URL del video'
    }
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (nueva_url) => _id = nueva_id;
    }

    get id() {
        return this.getId;
    }

    set id(nueva_id) {
        return setUrl(nueva_id);
    }

    playMultimedia() {
        //llamada a la F(x) IIFE
        let Iframe = document.getElementById( this.getId() );
        Iframe.setAttribute( 'src', this.getUrl() )
    };

    setInicio(tiempo) {
        let nuevaURL = this.getUrl
    }

};//fin del Reproductor


//F(x) IIFE
const miReproductor = () => {
    let miMetodoPrivado;
    //tiempo de ejecucion

    var musica1 = new Reproductor('https://www.youtube.com/embed/lWA2pjMjpBs', 'musica')
    var pelicula1 = new Reproductor('https://www.youtube.com/embed/lWA2pjMjpBs', 'peliculas')
    var serie1 = new Reproductor('https://www.youtube.com/embed/lWA2pjMjpBs', 'series')

    console.log(musica1.url);
    console.log(pelicula1.url);
    console.log(serie1.url);
    serie1.playMultimedia();
    musica1.playMultimedia();
    pelicula1.playMultimedia();

    miMetodoPrivado = () => {}

    return {
        miFuncionPublica: () => {
           miMetodoPrivado();
       }
    }
};

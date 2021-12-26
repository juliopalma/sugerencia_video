function dibujarIframe(urlVideo, id) {
    $(`#${id}`).html(`<iframe width="560" height="315" src="${urlVideo}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
}

class Multimedia {
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}


class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        dibujarIframe(this.url, this._id);
    }

    setInicio(tiempo) {
        this._url += `?start=${tiempo}`;
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/NB0ipPSq76o", "musica");
musica.setInicio(7);
const peliculas = new Reproductor("https://www.youtube.com/embed/oi7bhRmJzec", "peliculas");
peliculas.setInicio(15)
const series = new Reproductor("https://www.youtube.com/embed/der8A7Z9u7c", "series");
series.setInicio(50);

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();
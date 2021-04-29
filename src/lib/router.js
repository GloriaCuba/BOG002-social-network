class Router {
    
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "muro" : pathname.replace("/", "");
        this.load(URI);
    }

    
    load(page = "muro") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#root");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Genial", path);
    }

}
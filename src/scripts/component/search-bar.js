class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchForm").value;
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        .search-container {
            padding: 20px 0;
            max-width: 500px;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border-radius: 5px;
            font-size: 20px;
        }
        
        .search-container > input:focus::placeholder {
            opacity: 0.3;
        }
        
        .search-container > button {
            padding: 16px;
            background-color: #fcc133;
            color: black;
            font-size: 20px;
            font-weight: bold;
            font-family: 'Rubik';
            cursor: pointer;
            border-radius: 5px;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
                font-size: 16px;
            }
        
            .search-container > button {
                width: 100%;
                font-size: 16px;
            }
        }
        </style>
        <div id="search-container" class="search-container">
                 <input placeholder="Let's cook..." id="searchForm" type="search">
                 <button id="searchButtonField" type="submit">Search</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButtonField").addEventListener('click', this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
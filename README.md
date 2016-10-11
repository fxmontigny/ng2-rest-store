# ng2-rest-store [![npm version](https://badge.fury.io/js/ng2-rest-store.svg)](https://www.npmjs.com/package/ng2-rest-store)
An implementation of communication server for Angular 2.

* [Installation](#installation)
* [Usage](#usage)

## Installation
First you need to install the npm module:
```sh
npm install ng2-store --save
```

## Usage

```ts
import {Component} from '@angular/core';
import {Store} from 'ng2-store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    constructor() {
        this.test();
    }

    test() {
        //Example with https://jsonplaceholder.typicode.com/

        let posts = new Store({
            id: "posts",
            proxy: {
                url: "jsonplaceholder.typicode.com",
                protocol: "https", //optional
                headers: {"token": "123456"} //optional
            }
        });
        //auto create store request like "https://jsonplaceholder.typicode.com/posts" 

        Store.setDefaultProxy({
            url: "jsonplaceholder.typicode.com",
            protocol: "https"
        });
        //create default proxy and set by default to the other new one

        let comments = new Store({
            id: "comments"
        });

        //GET /posts
        posts.load()
            .then(() => {
                console.log(posts.getAt(0).getData()); //find first local data
                console.log(posts.findBy({
                    id: 4,
                    userId: 1
                }).getData()); //find first local by json


                //PUT /posts/1
                posts.modify({id: 1, title: "Exemple 1"})
                    .then(data => {
                        console.log("Post", data);
                    })
                    .catch(err => {
                        console.error(err);
                    });

                //DELETE /posts/1
                posts.remove({id: 1})
                    .then(data => {
                        console.log("Delete", data);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            })
            .catch(err => {
                console.error(err)
            });

        //GET /posts/1
        posts.load({customPath: "/1"})
            .then(datas => {
                console.log(datas); //load datas without storage
            });

        //GET /posts/1/comments
        posts.load({customPath: "/1/comments"})
            .then(datas => {
                console.log(datas); //load datas without storage
            });

        //GET /comments?postId=1
        comments.load({filters: {postId: 1}})
            .then(datas => {
                console.log(datas); //load datas and storage
            });

        //GET /posts?userId=1
        posts.load({filters: {userId: 1}})
            .then(datas => {
                console.log(datas); //load datas and storage
            });

        //POST /posts
        posts.add({title: "titre de test"}, {mergeLocalAndRemote: false})
            .then(data => {
                console.log(data);
            });

        //POST /posts
        posts.add({title: "titre de test 2"})
            .then(data => {
                console.log(data);
            });

        //possibility to use store, after init, anywhere
        setTimeout(() => {
            let postsStatic = Store.get("posts");
            console.log(postsStatic.getAt(0).getData());
        }, 2000)
    }
}
```

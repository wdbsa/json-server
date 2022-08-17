const container = document.querySelector('.blogs');


const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';

    const res = await fetch(uri);
    const post = await res.json();
    
    let template = '';
    post.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0,70)}</p>
                <a href="/details.html?id=${post.id}">Read more...</a>
            </div>
        `
    });

    container.innerHTML = template;



};

window.addEventListener('DOMContentLoaded', () => renderPosts());


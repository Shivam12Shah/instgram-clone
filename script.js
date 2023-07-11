var ussr = [
    {
        username: "shivam",
        name: "raju",
        status: "follow",
        profileimg: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"

    },
    {
        username: "sajjna",
        name: "singh",
        status: "unfollow",
        profileimg: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwbW9kZWxzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"


    },
    {
        username: "yogi",
        name: "yogendar",
        status: "follow",
        profileimg: "https://images.unsplash.com/photo-1613940102159-1e7a40f2b60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"


    },
    {
        username: "pratham",
        name: "dangi",
        status: "unfollow",
        profileimg: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"

    }
]


ussr.forEach(function (dets) {
    document.querySelector(".suggested-users").innerHTML += `<div class="user">
    <div class="user-profile">
        <div class="user-img">
        <img src="${dets.profileimg}" alt=""></div>
        <div class="user-dets">
            <h5>${dets.name}</h5>
            <p>${dets.username}</p>
        </div>
    </div>
    <p>${dets.status}</p>
</div> `
});
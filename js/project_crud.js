class authorisedUsers{
    constructor(name1, telephone1, remarks1){
        this.name1 = name1;
        this.telephone1 = telephone1;
        this.remarks1 = remarks1;
    }
}


class UI{
    static displayUsers(){
        const storedUsers = [
            {
                name1: "Charmaine Wan",
                telephone1: '(65) 6603-7440',
                remarks1: 'To be added to HSBCnet'
            },

            {
                name1: "Serene Cai",
                telephone1: '(65) 6603-7426',
                remarks1: 'To be added to HSBCnet'
            },

            {
                name1: "Kimberly Wan",
                telephone1: '(65) 6603-7425',
                remarks1: 'To be added to HSBCnet'
            }
        ];
        const users = storedUsers;
        //Loop through all the users in this array
        
        users.forEach((element) => UI.addUserToList(element));
        
    }

    static addUserToList(element){
        const list = document.querySelector('#currentlistsAuthUsers');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.name1}</td>
            <td>${element.telephone1}</td>
            <td>${element.remarks1}</td>
            <td>
              <a href='#' class='btn btn-danger btn-sm deletebtn'>x</a>  
            </td>
        `;
        list.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', UI.addUserToList);

document.querySelector('#newusers_form').addEventListener('submit', (e)=>{
    const name1 = document.querySelector('#name1').value;
    const telephone1 = document.querySelector('#telephone1').value;
    const remarks1 = document.querySelector('#remarks1').value;

    const 
});

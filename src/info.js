import React from 'react';

class Info extends React.Component {
    state = {
        users:[
            {
                name: 'Miss Clenira Ramos',
                surname: 'Clenira',
                age: '32',
                company: 'samsung',
                image: 'https://randomuser.me/api/portraits/women/80.jpg'
            },
            {
                name: 'Miss Natalie Brown',
                surname: 'Natalie',
                age: '37',
                company: 'nokia',
                image: 'https://randomuser.me/api/portraits/women/35.jpg'
            },
            {
                name: 'Mr Arnaud Chow',
                surname: 'Chow',
                age: '35',
                company: 'motorola',
                image: 'https://randomuser.me/api/portraits/women/37.jpg'
            },
            {
                name: 'Mr Akseli Heikkinen',
                surname: 'Akseli',
                age: '28',
                company: 'karbon',
                image: 'https://randomuser.me/api/portraits/women/43.jpg'
            }
        ]
    }
    render() {
        const getimage = (event) => {
            const imgSrc = event.target.src;
            const locationInState = event.target.alt;
            const center = document.querySelector(".center img");
            const name = this.state.users[locationInState].name;
            const surname = this.state.users[locationInState].surname;
            const age = this.state.users[locationInState].age;
            const company = this.state.users[locationInState].company;
            if (event.target.tagName == 'IMG') {
                document.getElementById('name').value = name;
                document.getElementById('surname').value = surname;
                document.getElementById('age').value = age;
                document.getElementById('company').value = company;
                center.src = imgSrc;
                center.alt = event.target.getAttribute('alt');
            }
        }
        // const deleteUser = () => {
        //     const locationInState = document.getElementById('centerimage').getAttribute('alt');
        //     const user = [...this.state.users];
        //     console.log(user)
        //     delete user[locationInState];
        //     console.log(user)
        //     this.setState({
        //         users:user
        //     })
        // }
        const editinfo = (e) => {
            e.preventDefault();
            const target = e.target;
            const locationInState = document.getElementById('centerimage').getAttribute('alt');
            const location = this.state.users[locationInState];
            location.name = target[0].value;
            const user = [...this.state.users];
            user[locationInState] = {
                name: target[0].value,
                surname: target[1].value,
                age: target[2].value,
                company: target[3].value,
                image: document.getElementById('centerimage').src
            }
            this.setState({
                users:user
            })
        }
        // var left = document.getElementById('left');
        // console.log(document.getElementById('name'))
        // function createDiv(height) {
        //     var div = document.createElement('div');
        //     div.style.top = 0;
        //     div.style.right = 0;
        //     div.style.width = '5px';
        //     div.style.position = 'absolute';
        //     div.style.cursor = 'col-resize';
        //     /* remove backGroundColor later */
        //     div.style.backgroundColor = 'red';
        //     div.style.userSelect = 'none';
        //     /* table height */
        //     div.style.height = height + 'px';
        //     return div;
        // }
        // function setListeners(div) {
        //     var pageX, curCol, nxtCol, curColWidth, nxtColWidth;
        //     div.addEventListener('mousedown', function (e) {
        //         curCol = e.target.parentElement;
        //         nxtCol = curCol.nextElementSibling;
        //         pageX = e.pageX;
        //         curColWidth = curCol.offsetWidth
        //         if (nxtCol)
        //             nxtColWidth = nxtCol.offsetWidth
        //     });

        //     document.addEventListener('mousemove', function (e) {
        //         if (curCol) {
        //             var diffX = e.pageX - pageX;

        //             if (nxtCol)
        //                 nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';

        //             curCol.style.width = (curColWidth + diffX) + 'px';
        //         }
        //     });

        //     document.addEventListener('mouseup', function (e) {
        //         curCol = undefined;
        //         nxtCol = undefined;
        //         pageX = undefined;
        //         nxtColWidth = undefined;
        //         curColWidth = undefined;
        //     });
        // }
        // console.log(left)
        // function resizableGrid(element) {
        //     console.log(element)
        //     var div = createDiv(element.offsetHeight);
        //     left.appendChild(div);
        //     left.style.position = 'relative';
        //     setListeners(div);
        // }
        // resizableGrid(left);
        return (
            <div className="container">
                <div className="left" id="left" id="resizeableDiv">
                    <div className="center">
                        <img src={this.state.users[0].image} height="90%" id="centerimage" alt="0" />
                    </div>
                    <div className="left-bottom" onClick={getimage}>
                        <img src={this.state.users[0].image} width="100" height="100" alt="0" />
                        <img src={this.state.users[1].image} width="100" height="100" alt="1" />
                        <img src={this.state.users[2].image} width="100" height="100" alt="2" />
                        <img src={this.state.users[3].image} width="100" height="100" alt="3" />
                    </div>
                </div>
                <div className="right">
                    <form style={{"marginLeft":"10px","display":"block"}} onSubmit={editinfo}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" className="editable" id="name" defaultValue={this.state.users[0].name} />
                        </div>
                        <div>
                            <label htmlFor="surname">Surname: </label>
                            <input type="text" name="surname" className="editable" id="surname" defaultValue={this.state.users[0].surname} />
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <input type="text" name="age" className="editable" id="age" defaultValue={this.state.users[0].age} />
                        </div>
                        <div>
                            <label htmlFor="company">Company: </label>
                            <input type="text" name="company" className="editable" id="company" defaultValue={this.state.users[0].company} />
                        </div>
                        <input type="submit" className="submit" value="Change Info" />
                    </form>
                </div>
            </div>
        )
    }
}
export default Info;
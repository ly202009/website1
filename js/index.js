        // js starts here. (comments within the script tags start with // instead of <!--) 
        /** this is a comment of 
          multiple lines 
         * */
        // console.log(document)
        // document is called an object
        // console.log(document.body) // body is a property of the document
        // console.log(document.createElement('div')) // createElement is a method of the document (method is like a function)
        // this type of object (having properties, and methods) is called class
        
        // 1. create a div for the heading banner, and name it 
        document.body.appendChild(document.createElement('div'));
        let alldivs_inbody = document.body.getElementsByTagName('div')
        // console.log(alldivs_inbody[1])

        var box1 = alldivs_inbody[1]
        box1.innerText='Welcome to my first website.';
        box1.setAttribute('name', 'box1')
        box1.setAttribute('id', 'box1')
        box1.setAttribute('class', 'heading')

    // 2. create two divs, each for a paragraph, and name it box2a, and box2b
        // 2a. create a div to contain the paragraph boxes, and name it box 2
        const body = document.body
        let box2 = document.createElement('div')
        // console.log(box2)
        var action_to_append_box2 = body.appendChild(box2)
        // console.log(action_to_append_box2)
        // console.log(box2 === action_to_append_box2 )
        
        box2.setAttribute('name','box2')
        box2.setAttribute('id','box2')

        // 2b. create a div for the first paragraph, and name it box2a
        let box2a = addbox()
        box2a.innerText='div for paragraph1';
        box2a.setAttribute('name', 'box2a')
        box2a.setAttribute('id', 'box2a')
        box2a.setAttribute('class', 'paragraph')

        // 2c. create a div for the second paragraph, and name it 
        let box2b = addbox()
        box2b.innerText='Welcome to my first website.div for paragraph2'
        box2b.setAttribute('id', 'box2b')
        box2b.setAttribute('class', 'paragraph')
        
        // functions
        function addbox () {
            let tmpobj = document.createElement('div')
            body.appendChild(tmpobj)
            return tmpobj
        }
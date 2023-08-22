let serviceTab = document.getElementsByClassName('serviceTab')
        console.log(serviceTab)
        // Array.from(serviceTab).forEach((element) => {
        //     let content = element.children[1] 
        //     content.style.color = "black";
        //     console.log(content)
        //     element.addEventListener('click', (e) => {
              
        //        content.style.color = "red";
        //       let index = serviceTab.indexOf(element)


        //     });
           

        // })
        for(let c=0;c<serviceTab.length;c++){
          let index
          let content = serviceTab[c].children[1] 
          console.log(content)
          serviceTab[c].addEventListener('click',(e)=>{
            index = c
            content.style.color = "red";
           let j=0
            while(j<serviceTab.length){
              if(j!=index){
                let blackContent = serviceTab[j].children[1] 
                blackContent.style.color = "black"
               }

                j++;
            }

          })

        }
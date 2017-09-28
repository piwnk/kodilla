const addBordersToContainers = () => {
   let containers = document.getElementsByClassName("container");

   Array.from(containers).map(container => {
      let node = document.createElement("DIV");
      node.classList.add("borders");
      for (let i=0; i<3; i++) {
         let innerNode = document.createElement("DIV");
         node.appendChild(innerNode);
      }
      container.appendChild(node);
   });
};

addBordersToContainers();
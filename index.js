let data = [12, 34, 64, 1, 2, 33, 45, 67, 4, 5];

      //traversing array
      //   for (let i = 0; i < array.length; i++) {
      //     document.write(`Array element at index ${i} is ${array[i]}<br />`);
      //   }

      //

      function getElement() {
        let el = document.getElementById("element").value;
        if (el < data.length && typeof parseInt(el) === "number") {
          alert(`Array element at index ${el} is ${data[el]}`);
        } else {
          alert("please input valid data");
        }
      }
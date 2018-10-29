const render = function () {
    $('.allInfo').empty();
    for (let i = 0; i < employeeList.length; i++) {
      $('.allInfo').append(`<p>${employeeList[i].name}</p> <p>${employeeList[i].officeNum}</p> <p>${employeeList[i].phoneNum}</p> <br>`)
    }
  };
  $('#view').on('click', render);
  
  // 2. Add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
  
  const getInputVal = function () {
    const nameVal = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
  
    obj = {
      name: nameVal,
      officeNum: officeNum,
      phoneNum: phoneNum
    }
    employeeList.push(obj);
  
    render();
  }
  
  $('#add').on('click', getInputVal);
  
  
  //3. Verify button is pressed, show "Yes" if the name that was input is in the employeeList array.
  const verifyName = function () {
    $('.allInfo').empty();
    const nameVal = $('#name').val();
    const track = "";
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.indexOf(nameVal) !== -1) {
        $('.allInfo').append(`<p>Yes<br>`)
      }
  
    }
  }
  $('#verify').on('click', verifyName);
  
  //4. Update button is pressed, then prompt for the name which will need to be updated.
  const updateName = function () {
    $('.allInfo').empty();
    const nameVal1 = $('#oldName').val();
    const newName1 = $('#newName').val();
    const track = "";
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === nameVal1) {
        employeeList[i].name = newName1;       
      }
    }
    render();
  }
  $('#update').on('click', updateName);
  
  //5. Delete button is pressed, delete the element from employeeList that matches the name the user entered in the input field. Re-render the list.
  
  console.log(employeeList);
  const removeName = function () {
    const nameVal = $('#name').val();
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === nameVal) {
        employeeList.splice(i, 1);
        render();
      }
    }
  }
  
  $('#delete').on('click', removeName);
  
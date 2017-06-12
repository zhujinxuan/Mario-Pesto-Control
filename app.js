'use strict';
var set_record= function(tdclass, arr){
  var subclass = ['.input1', '.input2'].map((xx)=>{
    return tdclass+' '+xx+' input';
  })
  for (const ind in arr) {
    document.querySelector(subclass[ind]).value = String(arr[ind])
  }
}

var updateall = function(arr){
  var res = 0;
  for (const xx of arr){
    res += xx[0] * xx[1];
  }
  document.querySelector('span#earned').innerHTML='$'+res;
  return res;
}

var main=function(){
  var items = ['Goombas', 'Bob-ombs','Cheep-cheeps'];
  var data_arr = [[5,12], [7, 8],[11,5]];
  var item_classes= ['.item1', '.item2', '.item3'];
  var input_classes=['.input1', '.input2']

  var selector_by = (x1,x2)=>{
    return (item_classes[x1]+' '+input_classes[x2]+' input');
  }

  var parseNumber = (x1, x2)=>{
    var test = Number(document.querySelector(selector_by(x1,x2)).value)
    if (test===test){
      document.querySelector('#error').style.display="none";
      data_arr[x1][x2] = test;
      updateitem(x1);
      updateall(data_arr);
    }else{
      document.querySelector('#error').style.display="block";
    }
  }

  var updateitem = function(index){
    document.querySelector(item_classes[index]+ ' .overall').innerHTML = "$"+(data_arr[index][0]* data_arr[index][1])
  }

  for (const ind in item_classes){
    set_record(item_classes[ind], data_arr[ind])
  }
  updateall(data_arr);
  updateitem(0);
  updateitem(1);
  updateitem(2);

  for (const i1 in item_classes){
    for (const i2 in [0,1]){
      document.querySelector(selector_by(i1,i2)).addEventListener(
          'change', function(){
            parseNumber(i1,i2);
          })
      document.querySelector(selector_by(i1,i2)).addEventListener(
          'click', function(){
            parseNumber(i1,i2);
          })
    }
  }
  var clickable_classes=['.goombas-icon', '.bob-ombs-icon', '.cheep-cheeps-icon']
  for (const i1 in clickable_classes){
    document.querySelector(clickable_classes[i1]).addEventListener(
      'click', function(){
        document.querySelector(clickable_classes[i1]).classList.remove('bounce');
        document.querySelector(clickable_classes[i1]).classList.toggle('bounce');
        setTimeout(function(){
          document.querySelector(clickable_classes[i1]).classList.remove('bounce');
        }, 1500)
      }
    )
  }
}
document.addEventListener('DOMContentLoaded', main, false);

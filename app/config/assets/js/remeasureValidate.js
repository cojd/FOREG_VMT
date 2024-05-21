
function bindRemeasureValidate(){

  // get current params, using params.status for setting required fields
  let params = JSON.parse(localStorage.getItem(Constants.LocalStorageKeys.SELECTION_PARAMS));

  if (params.form_def === "stand_doc") return; // just bail if we're editing a stand doc

  if (params.status != 9){
    setDefaults_remeasure()
  }

  setRequired_remeasure(params)

}

function setDefaults_remeasure(){
}


function setRequired_remeasure(params){

  // 9 represents 'Not Found'
  if(params.status != 9){
      $('input#height_r').prop('required',true)
    } else {
      $('input#height_r').prop('disabled', true)
    }
}



  function search_newTrees(params){

    let success = function(result){
      if(result.getCount() === 0){
        $('#from_check_r').modal('show')

        $( "#ok_from_check_r" ).click(function() {
          $('#from_tag_r').val(" ") // clear value
          $('#from_check_r').modal('hide')
        })

      } else{
        // alert("Tree Found in search_newTrees")
        console.log("succes")
      }
    }

    let failure = function(result){
      console.log("fromCheck_remeasure(): database look up failed")
      alert("fromCheck_remeasure(): database look up failed (search_newTrees)")
    }

    let query = `SELECT * FROM measure
                          WHERE measure.stand=?
                            AND measure.tag=?`;

   let bindParams = [params.stand, fromTag.val()]

   switch(params.type)
   {
     case Constants.PlotTypes.FIXED_RADIUS_PLOT:
        // value of 0 zero selected, only allowed for fixed radius plots
       if(fromTag.val().trim() === ""){
         return;
       }
       query += ` AND measure.plot=?`
       bindParams.push(params.plot)
       break;
     default:
      break;
   }

   odkData.arbitraryQuery('prev_data',query, bindParams, null, null, success, failure)
  }
}

function distanceCheck_remeasure(){


  let distance = $('input#distance_r')

  distance.change(()=>{
    let distanceVal = Number(distance.val())
    console.log("distanceVal " + distanceVal)

    if(distanceVal < 0.1 || distanceVal > 25.0){
      $('#distance_check_op1_r').modal('show')

      $( "#ok_distance_check_op1_r" ).click(function() {
        $('#distance_r').val(" ") // clear value
        $('#distance_check_op1_r').modal('hide')
      })
    } else if (distanceVal > 18){
    $('#distance_check_op2_r').modal('show')

    $( "#ok_distance_check_op2_r" ).click(function() {
      // $('#distance_r').val(" ") // clear value
      $('#distance_check_op2_r').modal('hide')
    })
    }
  })
}

function azimuthCheck_remeasure(){

  let azimuth = $('input#azimuth_r')


  azimuth.change(()=>{
      let azimuthVal = Number(azimuth.val())

      if(azimuthVal < 0 || azimuthVal > 360){
        $('#azimuth_check_r').modal('show')

        $( "#ok_azimuth_check_r" ).click(function() {
          $('#azimuth_r').val(" ") // clear value
          $('#azimuth_check_r').modal('hide')
        })
      }
  })
}

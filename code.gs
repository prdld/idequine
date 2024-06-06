//https://www.youtube.com/watch?v=4VN8ZdDse9M
//https://github.com/codzsword/bootstrap-admin-dashboard

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('ID Equine')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

let ss = SpreadsheetApp.getActive().getSheetByName('Data')  //การเข้าถึงข้อมูล
let data = ss.getDataRange().getDisplayValues()
let id = data.map(r=>r[0])

function getData(){
  data.shift()
  return data
}

function saveData(obj){
  ss.appendRow([,
                
                obj.inputB ,
                obj.inputC ,
                obj.inputD,
                obj.inputE ,
                obj.inputF,
                obj.inputG,
                obj.inputH,
                obj.inputI,
                obj.inputJ,
                obj.inputK,
                "'"+obj.inputL,
                obj.inputM,
                obj.inputN,
                obj.inputO,
                obj.inputP,
                obj.inputQ,
                obj.inputR,
                obj.inputS,
                obj.inputT,
                obj.inputU,
                obj.inputV,
                obj.inputW,
                obj.inputX,
                obj.inputY,
                obj.inputZ,
                obj.inputAA,
                obj.inputAB,
                obj.inputAC,
                obj.myfile,
                obj.inputAE,
                obj.inputAF,

                          
                ])

   let data = ss.getRange(ss.getLastRow(),1,1,ss.getLastColumn()).getDisplayValues()[0]
   return data
}

function updateData(obj){
  let index = id.indexOf(obj.numid)  //obj.inputA

  ss.getRange(index+1,2).setValue(obj.inputB)
  ss.getRange(index+1,3).setValue(obj.inputC)
  ss.getRange(index+1,4).setValue(obj.inputD)
  ss.getRange(index+1,5).setValue(obj.inputE)
  ss.getRange(index+1,6).setValue(obj.inputF)
  ss.getRange(index+1,7).setValue(obj.inputG)
  ss.getRange(index+1,8).setValue(obj.inputH)
  ss.getRange(index+1,9).setValue(obj.inputI)
  ss.getRange(index+1,10).setValue(obj.inputJ)
  ss.getRange(index+1,11).setValue(obj.inputK)
  ss.getRange(index+1,12).setValue("'"+obj.inputL)
  ss.getRange(index+1,13).setValue(obj.inputM)
  ss.getRange(index+1,14).setValue(obj.inputN)
  ss.getRange(index+1,15).setValue(obj.inputO)
  ss.getRange(index+1,16).setValue(obj.inputP)
  ss.getRange(index+1,17).setValue(obj.inputQ)
  ss.getRange(index+1,18).setValue(obj.inputR)
  ss.getRange(index+1,19).setValue(obj.inputS)
  ss.getRange(index+1,20).setValue(obj.inputT)
  ss.getRange(index+1,21).setValue(obj.inputU)
  ss.getRange(index+1,22).setValue(obj.inputV)
  ss.getRange(index+1,23).setValue(obj.inputW)
  ss.getRange(index+1,24).setValue(obj.inputX)
  ss.getRange(index+1,25).setValue(obj.inputY)
  ss.getRange(index+1,26).setValue(obj.inputZ)
  ss.getRange(index+1,27).setValue(obj.inputAA)
  ss.getRange(index+1,28).setValue(obj.inputAB)
  ss.getRange(index+1,29).setValue(obj.inputAC)
  ss.getRange(index+1,30).setValue(obj.myfile)
  ss.getRange(index+1,31).setValue(obj.inputAE)
  ss.getRange(index+1,32).setValue(obj.inputAF)
 
 

 
  let data = ss.getRange(index+1,1,1,ss.getLastColumn()).getDisplayValues()
   return data
}

/**Delete */
function delRecord(record){
 var index = id.indexOf(record) 
 if(index >-1){
   ss.deleteRow(index+1)
 }
   data.shift()
  return data
}

function getDBshow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheets()[2]
  var data = sheet.getDataRange().getDisplayValues().slice(1);
  return data;
}




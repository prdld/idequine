<script>
  let dataSet
window.onload = ()=>{
  $.LoadingOverlay("show");
  google.script.run.withSuccessHandler(data=>{
     dataSet = data
     showData(dataSet)
     $.LoadingOverlay("hide");
  }).getData()
}

    function changePage(pages) {
       var idElement = [...document.querySelectorAll('section')].forEach(elm => {
          if(elm.id===pages){
            document.getElementById(elm.id).style.display = "block"
            }else{
            document.getElementById(elm.id).style.display = "none"
          }
      });
    }
var table,t
function showData(dataSet){
   table = new DataTable('#example', {

    // layout: {
    //     topStart: {
    //         buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    //     }
    // },



        columnDefs: [
        {
            targets: [1,2,3,4,5,6,7,8,11,12,13,15,18,19,20,21,22,29],
            visible: false
        },
        {targets:[-1],className: 'all'},
        ],
    
    
    columns: [
        { title: 'ลำดับที่' },
        { title: 'CodeRegis' },
        { title: 'เลขบัตรประชาชน' },
        { title: 'ชื่อ' },
        { title: 'นามสกุล' },
        { title: 'บ้านเลขที่' },
        { title: 'หมู่ที่' },
        { title: 'ตำบล/แขวง' },
        { title: 'เขต/อำเภอ' },
        { title: 'จังหวัด' },
        { title: 'ปศุสัตว์เขต' },
        { title: 'เบอร์โทรศัพท์' },
        { title: 'NID (รหัส National ID System)' },
        { title: 'พิกัดพื้นที่' },
        { title: 'ชนิดสัตว์' },
        { title: 'ชนิดของการใช้งาน' },
        { title: 'ชื่อสัตว์' },
        { title: 'เลขไมโครชิพ (Microships)' },
        { title: 'สายพันธุ์ (ถ้ามีระบุ)' },
        { title: 'ปีเกิด (ถ้ามีระบุ)' },
        { title: 'เพศ' },
        { title: 'สัตว์นำเข้า/เกิดในไทย' },
        { title: 'ประเทศที่นำเข้า' },
        { title: 'วัคซีนรอบที่ 1' },
        { title: 'วันที่ทำวัคซีนรอบ 1' },
        { title: 'Lot no.1' },
        { title: 'วัคซีนรอบที่ 2' },
        { title: 'วันที่ทำวัคซีนรอบ 2' },
        { title: 'Lot no.2' },
        { title: 'อัพโหลดภาพ' },
        { title: 'วันที่บันทึก' },
        { title: 'Passport' },
        

{title: 'แก้ไข',defaultContent: "<button type='button' class='edit btn btn-warning btn-sm me-1'><i class='fa-solid fa-pen-to-square'></i></button>"},


// <button type='button' class='del btn btn-danger btn-xs'><i class='fa-solid fa-trash'></i></button>

    ],
    
    data: dataSet,
    destroy:true,


    language: {
        url: '//cdn.datatables.net/plug-ins/2.0.2/i18n/th.json',
    },

    lengthMenu: [
          [10, 25, 50, 100, -1 ],
          ['10', '25', '50','100', 'ทั้งหมด' ]
      ],
    
    order: [[0, 'desc']]
});
table.on('click', '.edit', function (e) {
    let data = table.row(e.target.closest('tr')).data();
    t = this
    
    changePage('pform');
    $('#numid').val(data[0])
    $('#inputB').val(data[1])
    $('#inputC').val(data[2])
    $('#inputD').val(data[3])
    $('#inputE').val(data[4])
    $('#inputF').val(data[5])
    $('#inputG').val(data[6])
    $('#inputH').val(data[7])
    $('#inputI').val(data[8])
    $('#inputJ').val(data[9])
    $('#inputK').val(data[10])
    $('#inputL').val(data[11])
    $('#inputM').val(data[12])
    $('#inputN').val(data[13])
    $('#inputO').val(data[14])
    $('#inputP').val(data[15])
    $('#inputQ').val(data[16])
    $('#inputR').val(data[17])
    $('#inputS').val(data[18])
    $('#inputT').val(data[19])
    $('#inputU').val(data[20])
    $('#inputV').val(data[21])
    $('#inputW').val(data[22])
    $('#inputX').val(data[23])
    $('#inputY').val(data[24])
    $('#inputZ').val(data[25])
    $('#inputAA').val(data[26])
    $('#inputAB').val(data[27])
    $('#inputAC').val(data[28])
    $('obj.myfile').val(data[29])
    $('#inputAE').val(data[30])
    $('#inputAF').val(data[32])
        
   
    
});
table.on('click', '.del', function (e) {
    let data = table.row(e.target.closest('tr')).data();
    
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    $.LoadingOverlay("show");
     google.script.run.withSuccessHandler(()=>{
        google.script.run.withSuccessHandler(showData).getData()
        $.LoadingOverlay("hide");
    }).delData(data[0])
  }
});

 });


}

const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
    // google.script.run.withSuccessHandler(()=>{
    //   google.script.run.withSuccessHandler(showData).getData()
    // }).delData(data[0])
});

document.querySelector("#setmode").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}
</script>



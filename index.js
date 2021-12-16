
window.onload = function () {

    const data=[
        {
            src: 'pic/img1.png',
            type: 'Branding',
            name: 'Hair Dresser'
        },
        {
            src: 'pic/img2.png',
            type: 'Design',
            name: 'Pigeon mail'
        },
        {
            src: 'pic/img3.png',
            type: 'Strategy',
            name: 'Business development'
        },
        {
            src: 'pic/img4.png',
            type: 'Development',
            name: 'Nice photos'
        },
        {
            src: 'pic/img5.png',
            type: 'Design',
            name: 'business development'
        },
        {
            src: 'pic/img6.png',
            type: 'Strategy',
            name: 'Business development'
        },
        {
            src: 'pic/img7.png',
            type: 'Branding',
            name: 'Hair Dresser'
        },
        {
            src: 'pic/img8.png',
            type: 'Development',
            name: 'Pigeon mail'
        },
        {
            src: 'pic/img9.png',
            type: 'Strategy',
            name: 'Business development'
        }

    ]

    const works_types = Array.from(document.body.querySelectorAll('.works_head_subtitle > span'))
    works_types.map((item)=> item.onclick = sortData)

    // function reductionInitial(id){
    //     works_types.map((item)=> item.style.color = "black")
    //     document.getElementById(id).style.color = 'red';
    // }

    function sortData(e) {
        let sort_data=[]
        if (e === undefined || e.target.id === 'all') {
            sort_data = data;
            selectionItem('all');
        }
        else {
            sort_data = data.filter((item) => item.type === e.target.id);
            selectionItem(e.target.id);
        }
        view(sort_data)
    }

    function  selectionItem(id){
        works_types.map((item)=> item.style.color = "#555555")
        document.getElementById(id).style.color = '#c0301c';
    }

    function view(sort_data){
        let result ='';
        sort_data.map((item=>{
            result += '<figure class="works_img"><img width="100%" src="'+item.src+'"><div class="works_hover">'
            result += '<figcaption class="works_hover_name">'+item.name+'</figcaption><span class="works_hover_type">'
                +item.type+'</span><span class="works_hover_btn">VIEW &gt;</span> '
            result +='</div></figure>'
        }))
        document.getElementById('root').innerHTML = result
    }

    sortData()
}

window.onload = function () {

    const data=[
        {
            src: 'images/img1.png',
            type: 'Branding',
            name: 'Hair Dresser'
        },
        {
            src: 'images/img2.png',
            type: 'Design',
            name: 'Pigeon mail'
        },
        {
            src: 'images/img3.png',
            type: 'Strategy',
            name: 'Business development'
        },
        {
            src: 'images/img4.png',
            type: 'Development',
            name: 'Nice photos'
        },
        {
            src: 'images/img5.png',
            type: 'Design',
            name: 'business development'
        },
        {
            src: 'images/img6.png',
            type: 'Strategy',
            name: 'Business development'
        },
        {
            src: 'images/img7.png',
            type: 'Branding',
            name: 'Hair Dresser'
        },
        {
            src: 'images/img8.png',
            type: 'Development',
            name: 'Pigeon mail'
        },
        {
            src: 'images/img9.png',
            type: 'Strategy',
            name: 'Business development'
        }

    ]


    const works_types = Array.from(document.body.querySelectorAll('.works_head_subtitle > span'))
    works_types.map((item)=> item.onclick = sortData)

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
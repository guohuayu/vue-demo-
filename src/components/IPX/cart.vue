<style scoped>

</style>

<template>
    <div>
       <ul>
           <li @click="Btn" ref="yiji1"  :data-id= list[0].id :data-index=1>{{list[0].title}}
               <p v-for="(item,i) in child" :key="i">{{item}}</p>
           </li>
           <li @click="Btn" :data-id= list[3].id  :data-index=2 >{{list[3].title}}
               <p v-for="(item,i) in child" :key="i">{{item}}</p>
           </li>
           <li @click="Btn" :data-id= list[8].id  :data-index=3 >{{list[8].title}}
               <p v-for="(item,i) in child" :key="i">{{item}}</p>
            </li> 
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {title:"一级导航1",id:234},
                {title:"二级导航1",parentid:234},
                {title:"二级导航1",parentid:234},
                {title:"一级导航2",id:456},
                {title:"二级导航2",parentid:456},
                {title:"二级导航2",parentid:456},
                {title:"二级导航2",parentid:456},
                {title:"二级导航2",parentid:456},
                {title:"一级导航3",id:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789},
                {title:"二级导航3",parentid:789}, 
            ],
            child:[]
        }
    },
    methods:{
        Btn(e){
            console.log(e) 
            this.child.splice(0,this.child.length)
            if (e.target.dataset.index==1) {
                this.list.map((a,b,c)=>{
                if (e.target.dataset.id==a.parentid) {
                    this.child.push(a.title)
                }  
                })
                alert(1)
            }else if (e.target.dataset.index==2) {
                alert(2)
            }else{
                alert(3)
            }
                
            
            

        }
    }
}
</script>
export default {
    state: {
        headerItems:[
            {
                name: "首页",
                url: "/"
            },
            {
                name: "工具栏",
                url: "",
                children: [{
                    name: "水电平摊",
                    url: "/calc"
                }]
            },
            {
                name: "关于我",
                url: "/about"
            }
        ]
    },
    mutations: {
    },
    getters: {
    }
  }
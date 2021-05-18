const app = new Vue(
    {
        el:"#root",
        data:{
            img: [
                "https://images.ray-ban.com/is/image/RayBan/805289154587__001.png?impolicy=RB_Product",
                "https://images.ray-ban.com/is/image/RayBan/805289154594__002.png?impolicy=RB_Product&width=400&bgc=%23f2f2f2",
                "https://images.ray-ban.com/is/image/RayBan/805289154600_shad_al2.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2"
            ],
            imgIndex: 0
        },
        methods: {
           nextImg: function () {
               this.imgIndex++;
               if (this.imgIndex == this.img.length) {
                   this.imgIndex = 0;
                }
            },
           prevImg: function () {
               this.imgIndex--;
               if (this.imgIndex == -1) {
                   this.imgIndex = this.img.length -1;
                }
            },
        },
        mounted: function () {
            const self = this;
            const length = this.img.length;
            setInterval(function() {
                self.imgIndex++;
                if (self.imgIndex == length) {
                    self.imgIndex = 0;
                }
            } ,3000);
        }
    }
);
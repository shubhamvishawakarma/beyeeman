const mongoose=require("mongoose");
const venderSchema=mongoose.Schema({

        mobile:{
                type:Number
        },
        otp:{
                type:Number
        },
        qr_code:{
                type:String
        },
        shop_name:{
                type:String
        },
        open_time:{
                type:String
        },
        close_time:{
                type:String
        },
        shop_image:{
                type:Array
        },
        categoryId:{
                type:Array
        },
        manager_name:{
                type:String
        },
        min_order:{
                type:Number
        },
        delivery_charge:{
                type:Number
        },
        distance:{
                type:Number
        },
        acc_no:{
                type:String
        },
        ifsc_code:{
                type:String
        },
        bank_name:{
                type:String
        },
        gst_no:{
                type:String
        },
        shop_status:{
                type:Number,
                default:0
        },
        approve_status:{
                type:Number,
                default:0
        },
        act_status:{
                type:Number,
                default:0
        },
        shop_address:{
                type:String
        },
        fcm_id:{
                type:String
        },
        rating:{
                type:String
        },
        o_time:{
                type:String,
                required:false,
                default:" "
        },
        c_time:{
                type:String,
                required:false,
                default:" "
        },
        addr:{
                type:String,
                required:false
        },
        shop_no:{
                type:String,
                required:false
        },
        area:{
                type:String,
                require:false
        },
        legal_name:{
                type:String,
                require:false
        },
        email:{
                type:String,
                require:false
        },
        fssai_no:{
                type:Number,
                required:false
        },
        max_distance:{
                type:Number,
                require:false
        },
        flat_delivery_charge:{
                type:Number,
                required:false
        },
        service_charge:{
                type:Number,
                default:0
        },
        commission:{
                type:Number,
                required:false
        },
        geo_location:{
                type:{type:String},
                coordinates:[]
        },
},{timestamps:true});
venderSchema.indexes({location:"2dsphere"});
module.exports=venderModel=mongoose.model("vender",venderSchema);

const path = require('path');
module.exports = {
    entry :'./src/index.js',
    mode:'development',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                  'file-loader'
              ]
          },
            {
                test:/\.(sc|c|sa)ss$/,
                use:['style-loader',
                {
                  loader:'css-loader',
                  options:{
                    sourceMap:true
                  }  
                },
                {
                  loader:'postcss-loader',
                  options:{
                    ident:'postcss',
                    sourceMap:true,
                    plugins:loader => [
                      require('autoprefixer')({browsers: ['> 0.15% in CN']})
                    ]
                  }
                },
                {
                  loader:'sass-loader',
                  options:{
                    sourceMap:true
                  }
                }
              ]
            }, 
        ]
    }
}
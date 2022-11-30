# FIleManager

start frontend - yarn run start
start backend - yarn run

create folder: post
localhost:8080/api/files/
body:{
  type: string
  path?: string
  title: string
}

get files: get
localhost:8080/api/files/
params:{
    path?: string
}

dowload file: get
localhost:8080/api/files/download
params:{
  path?: string
  title: string
}

upload file: post
localhost:8080/api/files/upload
body: FormData
params: {
  path?: string
}

delete file: delete
localhost:8080/api/files/
params: {
    path?: string
    title: string
}

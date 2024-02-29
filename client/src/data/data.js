import { rerenderTree } from "../rerender/rerender"

export let Data = {
    userInfo: [
        {
            nickname:'Alisa',
            icon: 'https://sun9-8.userapi.com/impg/f0eyk3phbS_NZfavSPK0OGoef_xp_EHZsdCvOg/3PX1FcEp2oI.jpg?size=1280x1280&quality=96&sign=8f9c2a0d5b71315c28176129d2ec2981&type=album',
            message: 'Hello',
        }
    ],
    newMessageText: "See ya space cowboy"
}

export let addMessage = (message) => {
    let newMessage = {
        nickname:'Alisa',
        icon: 'https://sun9-8.userapi.com/impg/f0eyk3phbS_NZfavSPK0OGoef_xp_EHZsdCvOg/3PX1FcEp2oI.jpg?size=1280x1280&quality=96&sign=8f9c2a0d5b71315c28176129d2ec2981&type=album',
        message: message
    }
 Data.userInfo.push(newMessage)
 rerenderTree(Data)
}
export let updateMessageText = (message) => {
 Data.newMessageText = message
 rerenderTree(Data)
}

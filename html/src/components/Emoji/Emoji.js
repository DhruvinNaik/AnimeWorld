import './Emoji.css';
export default function Emoji(){
    const smileEmoji = '\u{1F604}';
    const cloudFace='\u{1F636}';
    const coldFace='\u{1F976}';
    const blast='\u{1F92F}';
    return(
        <>
        
        <container className='insta'>
            <p>{smileEmoji}</p>
            <p>{cloudFace}</p>
            <p>{coldFace}</p>
            <p>{blast}</p>
            <p>{smileEmoji}</p>
            <p>{cloudFace}</p>
            <p>{coldFace}</p>
            <p>{blast}</p>
            <p>{smileEmoji}</p>
            <p>{cloudFace}</p>
            <p>{coldFace}</p>
            <p>{blast}</p>
        </container>
        </>
    );
}
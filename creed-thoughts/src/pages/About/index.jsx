import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.jpg"
import styles from "./About.module.css"
import fotoSobreMim from "assets/aboutpic.webp"

export default function About() {
    return (
        <PostModel fotoCapa={fotoCapa} titulo="About me">
            <h3 className={styles.subtitulo}>Hi, this is creed</h3>
            <img className={styles.fotoSobreMim } src={fotoSobreMim} alt="Nice picture of Creed"/>
            <p className={styles.paragrafo}>Yo, what's up, folks? It's your boy, Creed Bratton, the enigmatic cat from Dunder Mifflin's Scranton branch. Now, let me take you on a wild ride through the twisted maze that is my life. Back in the '60s, I was a part of a little band you might've heard of - The Grass Roots. Man, we rocked the stage and the charts, spreading those good vibes and groovy tunes. But you know, life is all about evolution, and after those crazy days, I found myself navigating the corporate jungle at Dunder Mifflin. Did I know what I was doing? Not really. Did I have a blast? Absolutely.</p>
            <p className={styles.paragrafo}>You see, my journey at Dunder Mifflin was like a game of chess, where the pieces were staplers, paper, and endless shenanigans. I embraced every opportunity for chaos, from pretending to be a vampire to starting my own mysterious blog. My coworkers were a wild bunch, and let me tell you, I fit right in. The office pranks, the unusual friendships - it was all one big, surreal party. Sure, I might've been a bit cryptic and had a penchant for stretching the truth, but that's just me keeping life interesting, you know? So, here's to a life of music, paper, and all the bizarre moments in between. Keep rockin', and remember, anything is possible, especially if you've got a quality fake ID.</p>

        </PostModel>
    )
}
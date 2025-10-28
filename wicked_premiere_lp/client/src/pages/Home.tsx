import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Star } from "lucide-react";
import WickedQuiz from "@/components/WickedQuiz";
import WickedGallery from "@/components/WickedGallery";
import CountdownTimer from "@/components/CountdownTimer";
import WickedGame from "@/components/WickedGame";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Floating Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">#EuNaPremiereDeWicked</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-primary">Desafiando</span>
            <span className="block text-secondary">a Gravidade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light italic">
            A história de uma menina que aprendeu a voar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5 mr-2" />
              Minha História
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="w-5 h-5 mr-2" />
              Assistir Vídeo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minha <span className="text-primary">Jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De Salvador para São Paulo, da exclusão para a força, da dor para o voo
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden border-primary/20 shadow-2xl shadow-primary/10">
            <div className="aspect-video bg-black/50 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KGKRaqL12cw"
                title="Minha história - Wicked"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-4">
              Também disponível no TikTok! 💚
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              <a 
                href="https://vm.tiktok.com/ZMApMC4mn/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-lg mr-2">🎵</span>
                Assista no TikTok
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Qual Personagem de <span className="text-secondary">Wicked</span> Você É?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra qual personagem do universo de Wicked mais combina com você!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <WickedQuiz />
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wicked <span className="text-primary">Memory!</span> 🧠✨
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teste sua memória com os personagens e elementos mágicos de Wicked!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <WickedGame />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-secondary/20">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
                  Indo a fundo na minha história...
                </h2>
                <p className="text-lg leading-relaxed mb-6 first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                  Eu tinha sete anos quando vi a Ariana Grande pela primeira vez. Era em Brilhante Victorious, e eu lembro de pensar: "Ela é diferente". Não era só o cabelo vermelho da Cat Valentine, era a forma como ela cantava, como ela brilhava. Eu não sabia ainda, mas aquela menina ia me ensinar a confiar em mim mesma. Anos depois, quando descobri que ela seria a Glinda em Wicked, eu senti que o universo estava me dizendo algo. Era como se a menina que me ensinou a sonhar estivesse me levando para um lugar ainda mais mágico.
                </p>

                <p className="text-2xl font-bold text-primary my-8 text-center italic">
                  Aí chegou Wicked. E pela primeira vez, eu me vi.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Se eu pudesse resumir a minha história como uma mulher negra, nordestina e vinda da favela e que agora conseguiu uma oportunidade de estudos em São Paulo, eu diria que cresci acreditando que o mundo tinha lugares reservados pra cada um e que o meu era sempre o de observar de longe. Eu aprendi a me diminuir pra caber, a esconder o brilho pra não incomodar, e a achar que sonhar demais era luxo de quem nasceu em outro lugar. Wicked foi a primeira vez que eu tive oportunidade financeira de acessar o teatro. A primeira vez que eu sentei naquela poltrona e as luzes se apagaram, eu não estava mais na favela, não estava mais em São Paulo. Eu estava em Oz. E pela primeira vez, eu entendi que a arte não é luxo, é necessidade. É oxigênio.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Eu não tenho todos os itens de fã. Não tenho dinheiro pra comprar todos os ingressos, todos os souvenirs, todas as edições especiais. Mas isso nunca limitou o meu amor. Porque o amor não se mede pelo que você tem, mas pelo que você sente. E eu sinto Wicked em cada batida do meu coração. Eu sinto quando acordo de manhã e lembro que "ninguém chora por mim se eu for embora", mas mesmo assim eu escolho ficar. Eu sinto quando olho no espelho e vejo a minha pele, e em vez de vergonha, eu vejo força. Eu sinto quando canto "Defying Gravity" sozinha no meu quarto e, por alguns minutos, eu realmente voo.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  A Elphaba me ensinou que ser diferente não é um defeito, é uma força. Que o verde que o mundo chama de estranho pode ser exatamente o que te torna inesquecível. E quando ela canta <span className="text-primary italic">"It's time to trust my instincts, close my eyes and leap"</span>, eu sinto como se ela falasse comigo. Foi o que eu fiz quando saí da minha cidade, deixei minha família e vim pra São Paulo estudar. Fechei os olhos e saltei, acreditando que podia desafiar a gravidade que sempre tentaram colocar sobre mim. E eu caí. Várias vezes. Mas toda vez que eu caía, eu lembrava da Elphaba. Eu lembrava que ela também foi chamada de "errada", de "perigosa", de "má". E mesmo assim, ela voou.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Wicked foi meu primeiro contato com esse tipo de arte e mais que um musical, foi um espelho. Eu vi a menina que não queria só ser aceita, mas ser livre. Vi a mulher que aprendeu que o amor mais poderoso é o que a gente sente por quem a gente é, mesmo quando o mundo insiste em pintar a gente de "errado". Eu vi a amizade entre Elphaba e Glinda e entendi que as pessoas mais diferentes podem se transformar. Que a Glinda, que começou superficial, aprendeu a ver além das aparências. E que a Elphaba, que começou sozinha, aprendeu que ser amada é possível, mesmo quando você é "diferente".
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Eu mereço estar na première porque Wicked não é só uma história que eu assisti, é uma história que eu vivi. É sobre acreditar na própria cor, na própria voz e na própria força, mesmo quando ninguém mais acredita. É sobre entender que a diferença não é uma maldição, é um superpoder. É sobre saber que, mesmo quando o mundo te chama de bruxa má, você pode escolher voar. E eu escolhi voar. Todos os dias, eu escolho voar.
                </p>

                <p className="text-2xl font-bold text-secondary text-center my-8 italic">
                  Estar lá seria ver na tela grande o símbolo da menina que um dia teve medo de sonhar, mas que agora sabe que pode voar. Seria o fechamento de um ciclo. Seria a prova de que a arte salva, de que a representação importa, de que a minha história merece ser vista. 💚✨🧹
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minha <span className="text-secondary">Jornada</span> Wicked
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Momentos que marcaram minha história com este universo mágico
            </p>
          </div>

          <WickedGallery />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        
        <div className="container relative z-10">
          <Card className="max-w-3xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Me Ajude a <span className="text-primary">Voar</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Compartilhe minha história e me ajude a realizar esse sonho
            </p>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-3">
                Compartilhe este link para me apoiar:
              </p>
              <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                <code className="text-primary flex-1 text-sm break-all">
                  http://wickedquizpremiere-ias.com
                </code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText("http://wickedquizpremiere-ias.com");
                    alert("✅ Link copiado! Cole nas suas redes sociais para me apoiar 💚");
                  }}
                >
                  Copiar
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                  #EuNaPremiereDeWicked
                </span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium">
                  @wickedmusicalbr
                </span>
                <span className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                  @universalpicsbr
                </span>
              </div>

              <div className="flex gap-4 mt-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    const text = "🧙‍♀️ Descubra quem você seria em Wicked e conheça a história de uma fã de desafiar a gravidade! ✨\n\n#EuNaPremiereDeWicked @wickedmusicalbr @universalpicsbr";
                    const url = "http://wickedquizpremiere-ias.com";
                    const fullMessage = `${text}\n\n${url}`;
                    
                    if (navigator.share) {
                      navigator.share({ 
                        title: "Descubra quem você seria em Wicked! 🧙‍♀️", 
                        text: fullMessage
                      });
                    } else {
                      navigator.clipboard.writeText(fullMessage);
                      alert("✅ Mensagem copiada! Cole nas suas redes sociais para me apoiar 💚");
                    }
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Compartilhar Minha História
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container text-center">
          <p className="text-muted-foreground">
            Feito com <Heart className="inline w-4 h-4 text-primary" /> para o concurso{" "}
            <span className="text-primary font-medium">#EuNaPremiereDeWicked</span>
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            2025 • Desafiando a Gravidade 💚
          </p>
        </div>
      </footer>
    </div>
  );
}


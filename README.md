# 레코드팡팡 🎭 [Record PanPang]

## 🔗 배포 링크
https://record-pan-pang.vercel.app/

---

## 👨‍🏫 프로젝트 소개

일상과 기분을 공유하며 노래를 추천하는 뉴스피드 사이트입니다.<br/>
사용자들이 자신의 감정과 순간을 노래와 함께 표현할 수 있는 공간을 제공합니다.

## 🚩 프로젝트 개요

- **프로젝트명** &nbsp; :&nbsp; **Record PanPang**
- **진행 기간** &nbsp;: &nbsp; **24.10.10 ~ 24.10.17**

---

## ❤ 팀 소개

**[내일배움캠프] 2조**

## 👨‍👩‍👧‍👦 팀원 소개

|  송진우   |             이보영             |        정수희         |   조아영    |            조해인            |
| :-------: | :----------------------------: | :-------------------: | :---------: | :--------------------------: |
| **팀원**  |            **팀원**            |       **팀원**        |  **팀원**   |           **팀장**           |
| 댓글 전반 | 음악 검색 기능,<br/>음악 정보 표시 | 음악 플레이어,<br/>좋아요 | 게시글 전반 | 회원가입/로그인,<br/>프로필 수정 |

---

## 📚 STACKS

![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-666666?style=for-the-badge)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-666666?style=for-the-badge)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

---

## ✔️ 설치 패키지

- 프로젝트 세팅 : npx create-next-app@latest
  - tailwindcss 포함
  - 실행 : yarn dev
- tanstack query 설치 : yarn add @tanstack/react-query
  - tailwind.config.js 파일 생성 : npx tailwindcss init -p
- zustand 설치 : yarn add zustand
- zod 설치 : yarn add zod
- react-hook-form 설치 : yarn add react-hook-form @hookform/resolvers
- shadcn/ui(캐러셀 라이브러리) : yarn add shadcn/ui
  - gray, cssVariables X

## ✔️ Code Convention

- ES Lint , prettier 사용
- 컴포넌트일 경우에만 .jsx확장자 사용
- customHook을 사용하는 경우 : use + 함수명
- Props의 경우: on (onClick 등등)
- 함수인 경우: handle (handleClick 등등)
- 상수 : 모두 대문자 스네이크 케이스(snake_case) 예시) SNAKE_CASE
- js(변수, 함수, 인스턴스) : 카멜 케이스(camelCase) 예시) const createMovie = [];
- css, html : 케밥 케이스(kebab-case) 예시) `<div class="movie-items"></div>`
- image 명 : 케밥 케이스(kebab-case) 예시) movie-img.jpg
- 주석 최대한 활용하기 : 해당 코드 제목, 설명 간단하게 적어놓기
- 약칭은 되도록 사용하지 않기

## ✔️ Git Commit Convention

**작업 타입 작업내용**

- update : 해당 파일에 새로운 기능이 생김
- add : 없던 파일을 생성함, 초기 세팅
- bugfix : 버그 수정
- refactor : 코드 리팩토링
- fix : 코드 수정
- move : 파일 옮김/정리
- del : 기능/파일을 삭제
- test : 테스트 코드를 작성
- style : css
- gitfix : gitignore 수정
- script : package.json 변경(npm 설치 등)

---

## 📦 프로젝트 파일 구조

<details>
  <summary><b>Record PanPang 파일 구조</b></summary>

```
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂(assets)
 ┃ ┃ ┃ ┣ 📜CommentCon.tsx
 ┃ ┃ ┃ ┣ 📜EmptyHeart.tsx
 ┃ ┃ ┃ ┣ 📜FillHeart.tsx
 ┃ ┃ ┃ ┣ 📜PauseCon.tsx
 ┃ ┃ ┃ ┣ 📜PlayCon.tsx
 ┃ ┃ ┃ ┣ 📜Plus.tsx
 ┃ ┃ ┃ ┗ 📜StopCon.tsx
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜spotifyToken.ts
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂sign-in
 ┃ ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂sign-up
 ┃ ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂write
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂commonUI
 ┃ ┃ ┃ ┣ 📜Background.tsx
 ┃ ┃ ┃ ┣ 📜LikeButton.tsx
 ┃ ┃ ┃ ┗ 📜PostCard.tsx
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📜authForm.tsx
 ┃ ┃ ┃ ┃ ┗ 📜signOutButton.tsx
 ┃ ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┃ ┣ 📜CommentInput.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CommentItem.tsx
 ┃ ┃ ┃ ┃ ┣ 📜CommentList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜CommentSection.tsx
 ┃ ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┃ ┣ 📜EditProfileButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜EditProfileModal.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MyComment.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MyLike.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MyPageTabs.tsx
 ┃ ┃ ┃ ┃ ┣ 📜MyPost.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┃ ┃ ┣ 📜ProfileError.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProfileLoading.tsx
 ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┗ 📜ProfileImg.tsx
 ┃ ┃ ┃ ┣ 📂player
 ┃ ┃ ┃ ┃ ┣ 📜DetailPlayButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜DetailPlayer.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PlayButton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Player.tsx
 ┃ ┃ ┃ ┃ ┗ 📜PlayIcon.tsx
 ┃ ┃ ┃ ┣ 📂post
 ┃ ┃ ┃ ┃ ┣ 📜PostButtons.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PostCommnetCount.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PostForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PostList.tsx
 ┃ ┃ ┃ ┃ ┗ 📜PostSection.tsx
 ┃ ┃ ┃ ┗ 📂spotifySearch
 ┃ ┃ ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Command.tsx
 ┃ ┃ ┃ ┃ ┗ 📜SearchForPost.tsx
 ┃ ┃ ┣ 📂providers
 ┃ ┃ ┃ ┗ 📜QueryClientProvider.tsx
 ┃ ┃ ┗ 📂ui
 ┃ ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┃ ┣ 📜command.tsx
 ┃ ┃ ┃ ┣ 📜dialog.tsx
 ┃ ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┃ ┗ 📜textarea.tsx
 ┃ ┣ 📂hook
 ┃ ┃ ┣ 📜usePostById.ts
 ┃ ┃ ┣ 📜usePostByUserId.ts
 ┃ ┃ ┗ 📜usePosts.ts
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📜playerStore.tsx
 ┃ ┃ ┗ 📜spotifyStore.tsx
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜auth.ts
 ┃ ┃ ┣ 📜comment.ts
 ┃ ┃ ┣ 📜post.ts
 ┃ ┃ ┣ 📜Spotify.ts
 ┃ ┃ ┗ 📜track.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📂supabase
 ┃ ┃ ┃ ┣ 📜client-actions.ts
 ┃ ┃ ┃ ┣ 📜client.tsx
 ┃ ┃ ┃ ┣ 📜middleware.ts
 ┃ ┃ ┃ ┣ 📜server-actions.ts
 ┃ ┃ ┃ ┗ 📜server.tsx
 ┃ ┃ ┣ 📜formatTrackData.ts
 ┃ ┃ ┣ 📜getYoutubeID.ts
 ┃ ┃ ┗ 📜spotify-client.ts
 ┃ ┗ 📜middleware.ts
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜components.json
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

</details>
<br/>

## 📋 Supabase ERD 설계도
![Supabase ERD 설계도](https://github.com/user-attachments/assets/4ce886e6-0659-4d6b-b51b-28f87e3d5f58)

---

## 🗂️ 기능 설명

### 회원가입/로그인

Supabase Auth를 사용해 관리했습니다.

1. 유효성 검사 - 1
   유효성 검사를 위해 `zod`와 `react-hook-form`를 사용합니다. 존재하는 이메일은 별도의 유효성 검사를 통해 알려줍니다.

```tsx
// ./src/components/auth/Auth

const AuthForm = () => {
  ...
  const schema =
    path === SIGN_UP
      ? z.object({
          email: z
            .string()
            .email({ message: "이메일 형식으로 입력해주세요" })
            .min(1, { message: "이메일을 입력해주세요" }),
          password: z.string().min(6, "6자 이상 입력해주세요"),
          nickname: z.string().min(1, "닉네임을 입력해주세요.").max(10, "최대 10자 입력 가능합니다.")
        })
      : z.object({
          email: z.string().min(1, "이메일을 입력해주세요"),
          password: z.string().min(1, "비밀번호를 입력해주세요")
        });
  ...
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange", //'onBlur' : focus가 사라졌을 때
    defaultValues,
    resolver: zodResolver(schema)
  });
  ...
  return (
    <div className="container modal">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col items-center m-auto">
        <Input
          {...register("email")}
          placeholder="email"
          className={AUTH_CSS}
          onChange={() => setEmailMessage("")}
        />
        {formState.errors.email && <span className="text-sky-300 leading-tight">{formState.errors.email.message}</span>}
        {!!emailMessage && <span className="text-sky-300 leading-tight">{emailMessage}</span>}

        ...

      </form>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {carousel &&
          [0, 2, 4, 6].map(
            (
              i // 각 슬라이드에 두개씩 보여줌
            ) => <Slide play={[carousel[i], carousel[i + 1]]} key={`slide-${i}`} />
          )}
      </div>
    </div>
  );
};
```

2. 유효성 검사 - 2
   `profiles` 테이블에 저장된 `email`을 불러와서 해당 이메일이 존재하는 확인합니다.

```tsx
// ./src/components/auth/Auth

const AuthForm = () => {
  ...
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange", //'onBlur' : focus가 사라졌을 때
    defaultValues,
    resolver: zodResolver(schema)
  });
  ...
  const onSubmit = async (data: FieldValues) => {
    const emailData = await checkEmail(data.email);

    if (path === SIGN_UP) {
      if (emailData.length !== 0) {
        setEmailMessage("이미 존재하는 계정입니다.");
      } else {
        await signup({
          email: data.email,
          password: data.password,
          options: { data: { nickname: data.nickname, email: data.email, profile_img: "default" } }
        });
      }
    } else {
      if (emailData.length === 0) {
        setEmailMessage("존재하지 않는 계정입니다.");
      } else {
        await signin({ email: data.email, password: data.password });
      }
    }
  };
  ...
};
```

```tsx
// ./src/utils/supabase/client-actions.ts

export async function checkEmail(email: string) {
  const { data, error } = await supabase.from(PROFILES).select("email").eq("email", email);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
```

<br />

### 플레이어

메인 페이지에서 동작하는 플레이어입니다.<br/>
1. useRef 사용

```tsx
  // youtube iframe과 앨범 커버를 연결하여 영상은 노출되지 않고 노래만 재생됩니다.
  // 성능 최적화를 위해 재생을 클릭한 영상의 iframe만 렌더링 되도록 구현했습니다.
  
  const { playedVideo, setIsPlay, setPlayedVideo, playedPlayer, setPlayedPlayer } = useYoutubnStore();
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [showYouTube, setShowYouTube] = useState(false);

      {showYouTube && (
        <div className="hidden">
          <YouTube videoId={id} onReady={(e: YouTubeEvent) => onReady(e, playerRef)} />
        </div>
      )}
```
2. 실제 동작하는 함수
```tsx
  // 영상을 처음 클릭하면 showYouTube를 통해 프레임이 생성되고 로딩이 완료될 때 onReady 함수가 실행됩니다.
  const togglePlayVideo = async () => {
    if (!showYouTube) {
      setShowYouTube(true);
    }

  // 한 번 틀었던 노래를 재생, 일시정지 할 때 실행되는 부분
    if (playerRef.current && playedVideo.id === music.id) {
      if (playedVideo.isPlay) {
        playerRef.current.pauseVideo();
        setIsPlay();
      } else {
        playerRef.current.playVideo();
        setIsPlay();
      }
    }

    // 노래를 듣다가 다른 노래를 틀었을 때 실행되는 부분
    if (playedVideo.id !== music.id && playerRef.current) {
      if (playedVideo.isPlay && playedPlayer) {
        // 만약 다른 노래가 재생 중이라면 일시정지 함
        playedPlayer.pauseVideo();
      }
      // 모든 플레이어 정보를 방금 선택한 영상으로 변경하고 재생시킴
      setPlayedVideo(music.id);
      setPlayedPlayer(playerRef.current);
      playerRef.current.playVideo();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlayVideo();
  };

  // 프레임이 로딩되었을 때 추가 조작 없이 바로 재생될 수 있도록 설정
  const onReady = (e: YouTubeEvent, playerRef: MutableRefObject<YouTubePlayer | null>) => {
    playerRef.current = e.target;
    if (playedPlayer) {
      playedPlayer.pauseVideo();
    }
    setPlayedVideo(music.id);
    playerRef.current.playVideo();
    setPlayedPlayer(playerRef.current);
  };
```

<br />


### 검색

spotify에서 track data를 불러와서 search input box에 글자를 입력할 때마다 data 50개씩 dropdown modal 안으로 들어오도록 구현하였습니다.<br/>
dropdown으로 보여지는 track list들 중 한개를 선택하면 해당하는 track의 사진과 정보가 track info box에 자동으로 입력되어 들어옵니다.
사용자는 track을 검색하고 본인이 선택한 track의 정보를 track info box에서 확인할 수 있습니다.

```tsx
//SearchForPost.tsx
const SpotifySearch = ({ setCard, card, cardError }: Props) => {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  //처음 렌더링시에 fetchToke함수를 실행시켜주고 token을 가져와서 상태값 token에 담아줌
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientPW = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

    const fetchToken = async () => {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        cache: "no-store",
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientPW}`
      });
      if (!res.ok) {
        throw new Error("Failed to fetch token");
      }
      const data = await res.json();

      const { access_token: token } = data;

      setToken(token);
    };
    fetchToken();
  }, []);

  //사용자가 입력한 검색단어들이 search로 들어감, 입력값이 0보다 길어지면 dropdown됨
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      return;
    }
    setSearch(e.target.value);
    setOpen(e.target.value.length > 0);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    // spotify에서 track data를 가져오는 비동기 함수
    const getTrack = async () => {
      const res = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=50&offset=0`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + `${token}`
        }
      });

      if (!res.ok) {
        throw new Error("Failed to fetch track");
      }

      const data: SpotifyTracks = await res.json();
      const tracks: Track[] = data.tracks.items;
      setTracks(tracks);
    };
    //사용자가 검색 단어를 입력할 때마다 getTrack을 실행시켜줌
    getTrack();
  }, [search, token]);

  //검색 리스트 클릭시 불러온 데이터의 목록과 대조하여 해당하는 데이터만 추출해서 상태값card에 넣어주는 함수
  const shiftTrackToInfocard = (id: string) => {
    const trackInfo = tracks.find((item) => {
      return item.id === id;
    });

    if (trackInfo) {
      setCard(trackInfo);
    }

    setOpen(false);
    setSearch("");
  };

  //초로 만들어진 시간은 분초로 변경해주는 함수
  const formatDuration = (durationMs: number) => {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="container mx-auto flex flex-col gap-8 justify-center items-center">
      <CommandForPost
        search={search}
        tracks={tracks}
        open={open}
        handleInputChange={handleInputChange}
        shiftTrackToInfocard={shiftTrackToInfocard}
        cardError={cardError}
      />
      <CardForPost card={card} formatDuration={formatDuration} />
    </div>
  );
};
```

<br />

### 게시글

게시글 목록을 TanStack Query를 이용하여 실시간으로 반영되도록 구현했습니다.<br />
이 기능을 통해 사용자는 게시글이 추가, 수정, 삭제될 때 즉시 업데이트된 내용을 확인할 수 있습니다.

```tsx
// PostList.tsx
const PostList = ({ user, token }: Props) => {
  // 게시글 데이터를 가져오는 훅 호출
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>게시글을 불러오는 데 문제가 발생했습니다.</div>;
  }
  if (!posts) {
    return <div>게시글이 없습니다.</div>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.post_id}>
          {/* 각 게시글을 PostCard 컴포넌트로 렌더링 */}
          <PostCard post={post} user={user} token={token} />
        </li>
      ))}
    </ul>
  );
};

// usePosts.ts
export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"], // 쿼리 키
    queryFn: fetchPosts // 데이터 가져오는 함수
  });
};

// client-actions.ts
export async function fetchPosts() {
  // posts 테이블에서 데이터 가져오기
  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("*, profiles(nickname, profile_img)") // 프로필 데이터 포함
    .order("created_at", { ascending: false }); // 최신 게시글 우선 정렬

  // 에러 발생 시 처리
  if (postsError || !posts) {
    console.error(postsError);
    return []; // 에러 발생 시 빈 배열 반환
  }

  // 결과에서 각 포스트의 프로필 데이터 추가
  return posts.map((post) => ({
    ...post
  }));
}
```

<br/>

### 댓글

사용자가 댓글을 작성할 수 있습니다.<br/>
정렬을 통해 댓글을 작성하면 댓글 목록 맨 위에서 확인할 수 있고, 댓글 작성,수정 시간을 확인할 수 있습니다.

클라이언트 액션 - 댓글 조회를 처리하여 사용자가 빠르게 댓글을 확인할 수 있습니다.

client-action

```tsx
// 댓글 조회
export async function fetchComment(postId: string): Promise<Comment[]> {
  const STORAGE = "profiles";

  const { data: comments, error: commentError } = await supabase
    .from("comments")
    .select("comment_id, content, user_id, created_at, update_at")
    .eq("post_id", postId)
    .order("created_at", { ascending: false }); // 생성 시간 기준으로 정렬

  if (commentError) {
    console.error(commentError.message);
    throw new Error("댓글을 불러오는데 실패했습니다.");
  }

  const commentsWithProfile = await Promise.all(
    comments.map(async (comment) => {
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("nickname, profile_img")
        .eq("user_id", comment.user_id)
        .single();

      if (profileError) {
        throw new Error("프로필 정보를 불러오는데 실패했습니다.");
      }

      // `profile_img`를 가져와 절대 경로 생성
      const { data: { publicUrl: profileImgUrl } = {} } = supabase.storage
        .from(STORAGE)
        .getPublicUrl(profile.profile_img ?? "default");

      return {
        ...comment,
        profile: {
          nickname: profile.nickname,
          profile_img: profileImgUrl || "/default-profile.png"
        }
      };
    })
  );

  return commentsWithProfile;
}
// 댓글 추가
export async function addComment(content: string, postId: string) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("로그인이 필요합니다.");

  const { error } = await supabase.from("comments").insert([{ content, post_id: postId, user_id: user.id }]);

  if (error) throw new Error("댓글 추가에 실패했습니다.");
}

// 댓글 삭제
export async function deleteComment(commentId: string) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw Error("로그인이 필요합니다.");

  const { error } = await supabase.from("comments").delete().eq("comment_id", commentId).eq("user_id", user.id);

  if (error) {
    throw new Error("댓글 삭제에 실패했습니다.");
  }
}

// 댓글 수정
export async function updateComment(commentId: string, content: string) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("로그인 해주세요.");
  }
  const { error } = await supabase
    .from("comments")
    .update({ content })
    .eq("comment_id", commentId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error("댓글 수정에 실패했습니다.");
  }
}
```

<br />

### 마이페이지

사용자 정보와 사용자가 작성한 게시글과 댓글, 좋아요한 게시글을 확인할 수 있습니다.

1. 프로필 수정 기능
   `프로필 수정하기` 버튼을 클릭하면 모달창을 통해 사용자 정보를 수정할 수 있습니다.
   실시간으로 변화를 감지할 수 있도록 TanStack Query를 사용해 데이터를 불러와 변화가 발생하면 `invalidateQueries`를 통해 변경된 정보를 가져오도록 합니다.

```tsx
// ./src/components/features/mypage/EditProfileModal.tsx

const EditProfileModal = ({
  user,
  setShowModal
}: {
  user: User | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  ...
  // 사용자 프로필 업데이트 시 정보 바로 갱신되도록
  const queryClient = useQueryClient();
  // 사용자 정보 업데이트 성공 시 invalidateQueries
  const { mutate: handleUpdateUser } = useMutation({
    mutationFn: () => updateUser(user as User, nickname, profileImg),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user", "client"]
      });
      queryClient.invalidateQueries({ queryKey: ["post", currentUserId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    }
  });
  ...
};
```

액티브 탭

1. 액티브 탭 기능을 사용하여 사용자 경험을 개선하였습니다.

```tsx
const MyPageTabs = ({ user, token }: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const { setToken } = useSpotifyStore();

  useEffect(() => {
    const getToken = async () => {
      const token = await fetchToken();
      setToken(token);
    };
    getToken();
  }, [setToken]);

  const tabs = [
    { id: 1, label: "게시글", component: <MyPost user={user} token={token} /> },
    { id: 2, label: "댓글", component: <MyComment /> },
    { id: 3, label: "좋아요", component: <MyLike /> }
  ];

  return (
    <div className="max-w-full mx-auto">
      <ul className="flex justify-around border-b border-gray-300 my-4">
        {tabs.map((tab) => (
          <ul
            key={tab.id}
            className={`w-full text-center py-2 cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-sky-400 text-sky-400 font-semibold"
                : "text-gray-400 active:text-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </ul>
        ))}
      </ul>
      <div className="p-4">{tabs.find((tab) => tab.id === activeTab)?.component}</div>
    </div>
  );
};
```

<br />

### 네비게이션 바

로그인 정보가 없을 시 회원가입, 로그인 버튼이 우측 상단에 위치하며, 로그인 정보가 있을 시 로그아웃, 마이페이지 버튼과 프로필 이미지가 우측 상단에 위치합니다.

1. Link 태그로 연결하여 페이지 로딩 최적화

페이지 정보를 미리 불러와서 이동 시 시간을 줄일 수 있도록 했습니다.

```tsx
// ./src/components/features/navbar/ProfileImg.tsx

const ProfileImg = () => {
  ...
  const userImg = getPublicUrl("profiles", user?.user_metadata.profile_img);

  return (
    <Link href={"/mypage"} className="min-w-fit min-h-fit rounded-full">
      <Image
        src={userImg}
        alt="프로필 이미지"
        width={40}
        height={40}
        className="w-[40px] h-[40px] border-2 rounded-full aspect-auto object-cover"
      />
    </Link>
  );
};
```

---

## 💥 Trouble Shooting

### 회원가입/로그인

🔥 로그아웃 해도 '로그아웃, 마이페이지' 버튼이 유지됨.

서버용/클라이언트용 supabase client를 제대로 숙지하지 못해, supabase client가 제대로 작동하지 않아 사용자 정보가 업데이트 되지 않아 발생한 문제였습니다.

서버용 supabase client를 사용할 때는 각 함수마다 client를 생성하고, 클라이언트용 supabase client는 하나의 client만 생성해 import하여 사용했습니다.

```tsx
// ./src/utils/supabase/server-action.ts

"use server";
...
import { createClient } from "./server";

export async function signin(formData: SignInWithPasswordCredentials) {
  const supabase = createClient();
  ...
}

export async function signup(formData: SignUpWithPasswordCredentials) {
  const supabase = createClient();
  ...
}

export async function signout() {
  const supabase = createClient();
  ...
}
...
```

```tsx
// ./src/utils/supabase/server.tsx

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!);
}

export const supabase = createClient();
```

🔥 회원가입/로그인 시 유효성 검사에 사용할 테이블이 없었음.

`email` 컬럼 값을 unique하게 설정하기 위해 모든 사용자를 지우는 과정이 필요했습니다. 덩달아 연결된 정보도 같이 사라지게 되어 결국 모든 데이터를 지울 수 밖에 없었습니다.

좀 더 자세히 생각하고 데이터 베이스를 설계해야 한다는 것을 배웠습니다.
<br />
<br />

### 플레이어
🔥 배포 후, 특별한 오류코드 없이 메인 페이지에서 플레이어가 노출되지 않는 문제 발생<br/>
player 내부에서 음악 정보가 없으면 return되지 않도록 설정한 부분이 문제라고 생각함.

```tsx
  if (!music) {
    return (
      <div>
        Loading...
      </div>
    );
  }
```
코드를 변경하여 테스트 진행하니 Loading이 출력됨<br/>
음악 정보를 불러오는 데에 필요한 token, id가 props로 제대로 전달되지 않는 것 같아 2차 테스트

```tsx
  if (!music) {
    return (
      <div>
        {token}, {id}, {music}
      </div>
    );
  }
```
해당 코드로 token 값이 들어오지 않는다는 걸 확인함.<br/>
token은 가장 상위 컴포넌트인 메인 페이지의 page.tsx에서 서버 액션을 사용해서 얻어 내려주고 있었음.<br/>
현재 postList 컴포넌트를 클라이언트 컴포넌트로 변경했기 때문에 해당 컴포넌트에서 useEffect 훅을 사용하여 발급받는 것으로 변경
```tsx
  const { setToken, token } = useSpotifyStore();

  useEffect(() => {
    const getToken = async () => {
      const token = await fetchToken();
      setToken(token);
    };
    getToken();
  }, [setToken]);
```



<br />

### 검색

🔥 dropdown search input box를 구현하기위해 shadcn에서 commmand 컴포넌트를 가져와서 data와 연결을 했는데, 해당 input에 검색어를 입력할 때는 문제가 없었는데 input에 들어갔던 글자가 사라지는 동시에 `edirect-boundary.js:57 Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))`이러한 에러가 나왔습니다.<br />

삼항연산자를 이용해서 input에 값이 없을 때에도 빈 tag를 그려지도록 하여서 에러처리를 해주었습니다.

```tsx
        {open ? (
          <CommandList className="absolute top-full left-0 w-full bg-white rounded-b-lg border-t-0 max-h-[300px] overflow-y-auto shadow-lg">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {tracks.map((track) => (
                <CommandItem key={track.id} onSelect={() => shiftTrackToInfocard(track.id)}>
                  <Music className="mr-2 h-4 w-4" />
                  {track.name} - {track.artists[0]?.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        ) : (
          <CommandList></CommandList>
        )}
      </Command>
```

<br />

### 게시글

**🔥 Supabase 외래키 연결**

- **문제 발생:** `posts` 테이블에서 `post_id`로 `user_id`를 찾아 `profiles` 테이블에서 `nickname`, `profile_img` 데이터를 가져오려 했습니다. 아래 코드와 같이 작성하고 Supabase에서 외래키 연결을 시도했지만 연결되지 않았습니다. 'insert or update on table "posts" violates foreign key constraint "posts_user_id_fkey"'오류는 `posts` 테이블의 `user_id` 필드가 `profiles` 테이블의 `user_id`와 외래키로 연결되어 있는데, 삽입하려는 `user_id` 값이 `profiles` 테이블에 존재하지 않거나 유효하지 않은 경우 이 오류가 발생합니다.
- **해결 방법:** 두 테이블 간의 연결에 문제가 있는 것으로 추측되어, 기존에 등록된 데이터를 모두 삭제한 후 외래키를 다시 연결했습니다.

```tsx
// post_id로 게시글 정보 조회
export async function getPostById(postId: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*, profiles(nickname, profile_img)")
    .eq("post_id", postId)
    .single();

  if (error || !data) {
    console.error(error);
    return null;
  }

  return data;
}
```

<br />

### 댓글

- 🔥 **문제 발생:**
  댓글에 create_at이라는 타임스탬프가 있는데 처음에는 댓글 작성 시간만 기록하면 충분하다고 생각했지만, 댓글을 수정할 때마다 시간과 댓글 위치가 변경되는 문제가 발생했습니다.
- **해결 방법:** update_at 컬럼 추가<br>
  create_at: 댓글의 작성 시간을 유지하고, 댓글 정렬을 위한 기준값으로 사용했습니다.<br>
  update_at: supabase 트리거를 이용해 댓글이 수정될 때의 시간을 저장하고, 댓글에 표현했습니다.

```tsx
const { data: comments, error: commentError } = await supabase
  .from("comments")
  .select("comment_id, content, user_id, created_at, update_at")
  .eq("post_id", postId)
  .order("created_at", { ascending: false }); // 생성 시간 기준으로 정렬
```

<br />

### 마이페이지

🔥 다른 사용자로 로그인하면 기존 사용자 정보가 마이 페이지 사용자 정보에 적용됨.

TanStack Query를 사용해 데이터를 불러와서 auth state가 변경되면 `invalidateQueries`를 실행함. 이때 클라이언트 컴포넌트에서만 TanStack Query를 사용할 수 있고, 항상 상단에 노출되어있는 client 컴포넌트가 네비게이션 바의 프로필 이미지이므로 해당 컴포넌트에 `onAuthStateChange`를 적용함.

```tsx
// ./xrc/components/features/navbar/ProfileImg.tsx

const ProfileImg = () => {
  ...
  supabase.auth.onAuthStateChange(() => {
    // 모든 auth state 변화에 따라 session 다시 저장
    queryClient.invalidateQueries({ queryKey: ["user", "client"] });
  });
  ...
};
```

<br />

### 네비게이션 바

🔥 사용자 정보 변경 시 프로필 이미지가 같이 반영되지 않음

TanStack Query의 Provider 내부에 헤더를 포함시켜 `invalidateQueries`의 영향을 받도록 함.

```tsx
// ./src/app/layout.tsx

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <Header />
          <Background>{children}</Background>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
```

```tsx
// ./xrc/components/features/navbar/ProfileImg.tsx

const ProfileImg = () => {
  const defaultImg = getPublicUrl("profiles", "default");

  const {
    data: user,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["user", "client"],
    queryFn: () => fetchSessionData()
  });

  supabase.auth.onAuthStateChange(() => {
    // 모든 auth state 변화에 따라 session 다시 저장
    queryClient.invalidateQueries({ queryKey: ["user", "client"] });
  });
  ...
};
```

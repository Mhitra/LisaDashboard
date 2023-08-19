import Image from 'next/image';

export const GuildMenuItem = ({ guild }) => {
  return (
    <div
      className={`
        display: flex;
        align-items: center;
        padding: 20px 30px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        max-width: 300px;
        
      `}
    >
      <Image
        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
        height={55}
        width={55}
        className="rounded-full"
        alt={guild.name}
      />
      <p>{guild.name}</p>
    </div>
  );
};


export const GuildMenuItemSmall = ({ guild }) => {
  return (
    <div className={`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    max-width: 300px;
  `}>
      <Image
        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
        height={55}
        width={55}
        className={`
          border-radius: 50%;
        `}
        alt={guild.name}
      />
      <p>{guild.name}</p>
    </div>
  );
};

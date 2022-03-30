import { Instagram, Facebook, LinkedIn} from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="pt-24px pb-80px px-36px bg-primmary-blue text-white">
      <div>
        <h1 className="text-center font-semibold text-xl mb-16px">
          Perjalanan kemana aja
        </h1>
        <p className='mb-12px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta
          inventore molestiae.
        </p>
        <p className='mb-12px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          doloremque vitae non quis omnis totam consequuntur. Magni deleniti sit
          illo deserunt, est enim amet non excepturi odit quidem autem veniam.
        </p>
        <p className='mb-12px'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem id
          explicabo non tempore atque nostrum.
        </p>
      </div>
      <div className="mt-24px mb-32px text-center">
        <span className='mr-1'>
            <Instagram />
        </span>
        <span className='mr-1'>
            <Facebook />
        </span>
        <span className='mr-1'>
            <LinkedIn />
        </span>
      </div>
    </div>
  );
};

export default Footer;

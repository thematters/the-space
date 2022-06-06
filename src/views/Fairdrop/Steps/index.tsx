import { useState } from "react";
import classNames from "classnames";
import { useAccount } from "wagmi";

import {
  fetchWrapper,
} from "~/utils";

import styles from "./styles.module.sass";

type StepsProps = {
  next: (val: any) => void;
};

const Steps: React.FC<StepsProps> = ({ next }) => {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: accountData } = useAccount();
  const [claimData, setClaimData] = useState({
    account: String,
    nonce: String,
    exipredAt: String,
    signerSig: String
  });
  const [value, setValue] = useState(String);
  

  const account = accountData?.address;

  const verifyETHAddress = async () => {
    setLoading(true);
    try {
      // const data = await fetchWrapper.get(
      //   '/api/fairdrop/nonce?account='+account
      // );
      // setClaimData(data);
      setStep(2);
    } catch (e) {
      // next("not_eligible");
    }
    setLoading(false);
  };
  const verifyTwitterAccount = () => {
    window.open('https://twitter.com/intent/tweet?text=%F0%9F%92%B0Claim%20your%20%24SPACE%F0%9F%92%B0%20at%20https%3A%2F%2Fthespace.game%2Fclaim%20Inspired%20by%20%23RedditPlace%2C%20The%20Space%20is%20the%20world%26%2339%3Bs%20%23NFT%20%23pixelart%20graffiti%20wall%20where%20players%20can%20own%2C%20color%2C%20and%20trade%20pixels%20under%20Harberger%20Tax%20and%20Universal%20Basic%20Income%20%28UBI%29.%20%23TheSpaceGame%20%23%E7%83%8F%E5%A1%97%E9%82%A6', 'mywin',
'left=0,top=0,width=650,height=650');
    setStep(3);
  };
  const followUs = () => {
    window.open('https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ethespace2022&screen_name=thespace2022', 'mywin',
'left=0,top=0,width=650,height=650');
    setStep(4);
  };
  const claimSpace = async () => {
    setLoading(true);
    try {
      // const message = "I am signing this message to prove the ownership of this address.\n\nNonce: "+claimData.nonce+"\nExpiredAt: "+claimData.exipredAt;
      // await fetchWrapper.post(
      //   `/api/fairdrop/confirm`, {
      //     ...claimData,
      //     claimerSig: message,
      //     tweetURL: value
      //   }
      // );
      next("success");
    } catch (e) {
      // next("already_posted");
    }
    setLoading(false);
  };

  const amountPerAddress =
    process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

  return (
    <section className={styles.steps}>
      <div className="container">
        <div className={styles.title}>
          <h2>Claim {amountPerAddress} $SPACE</h2>
          <p>
            Congrats! You’re eligible to claim tokens. Here are instruction to
            proceed:
          </p>
        </div>
        <div className={styles.content}>
          <ol
            className={classNames({
              [styles.default]: step === 0,
              [styles.start]: step !== 0,
            })}
          >
            <li
              className={classNames({
                [styles.step1]: true,
                [styles.active]: step === 1,
                [styles.actived]: step > 1,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Verify your Ethereum address</span>
                {step === 1 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={verifyETHAddress}>
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step2]: true,
                [styles.active]: step === 2,
                [styles.actived]: step > 2,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Verify your Twitter account</span>
                {step === 2 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={verifyTwitterAccount}>
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step3]: true,
                [styles.active]: step === 3,
                [styles.actived]: step > 3,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Follow us on Twitter</span>
                {step === 3 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={followUs}>
                      Follow
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step4]: true,
                [styles.active]: step === 4,
              })}
            >
              <span>Copy and paste the tweet link and claim your $SPACE</span>
              {step === 4 && (
                <div className="d-flex justify-content-between align-items-center">
                  <input className="form-control" type="text" onChange={e => setValue(e.target.value)}/>
                  <div className="buttons">
                    <button className="btn fill" onClick={claimSpace}>
                      Claim
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ol>
          {step === 0 && (
            <>
              <p>
                Once verification process completed, you will receive $SPACE
                token
              </p>
              <div className={styles.form_check}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Use of this website constitutes acceptance of The Space <a
                    href="https://wiki.thespace.game/the-space-terms-of-use-community-code-of-conduct "
                    target="_blank"
                    rel="noreferrer"
                  >Term of Use</a>.
                </label>
              </div>
              <div className={`${styles.buttons} buttons text-end`}>
                <button
                  className="btn fill"
                  disabled={!checked}
                  onClick={() => setStep(1)}
                >
                  Get Started
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Steps;

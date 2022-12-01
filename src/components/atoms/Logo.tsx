type LogoProps = {
  color?: `#${string}`;
};

const Logo = ({ color = "#003415" }: LogoProps) => {
  return (
    <svg
      width="163"
      height="71"
      viewBox="0 0 163 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M69.296 27.1581C68.1358 27.435 67.6197 28.3213 67.5984 29.2416L65.3975 29.7997C64.9624 29.1308 64.6895 24.0648 63.1966 24.6059C62.962 24.8743 58.4749 25.6583 55.0584 26.5658C54.9049 25.8671 54.7087 25.1683 54.4656 24.4568C60.4967 22.974 68.268 20.6392 70.149 20.277C70.6097 21.0823 71.484 21.6234 72.6442 21.3124C75.583 20.6093 74.4186 16.0205 71.5011 16.8003C70.4049 17.0602 69.8803 17.8654 69.8035 18.7304C68.0334 19.3013 59.8185 21.0056 53.7362 22.6034C53.4632 21.9983 53.1561 21.3848 52.8149 20.7713C59.7247 19.1437 69.8504 16.0333 70.2045 16.2421C71.757 15.9652 69.7651 12.0879 69.8249 11.2784C69.812 11.2272 69.795 11.1804 69.7779 11.1378C71.6931 9.88511 70.4988 6.25496 67.8756 6.95798C65.2525 7.5843 65.9008 11.2911 68.1401 11.534C68.1443 11.5851 68.1529 11.6405 68.1656 11.6959L68.9505 14.7935C68.7969 15.1343 58.3811 17.205 51.7656 19.0329C51.3647 18.4151 50.9254 17.7887 50.4519 17.1582L59.5498 14.8531C60.0062 14.7381 60.2834 14.2737 60.1682 13.8135L57.7413 4.26521C59.6479 3.0083 58.4536 -0.613326 55.8304 0.0896936C53.2158 0.711759 53.8514 4.40156 56.0778 4.66572L58.2958 13.4087C58.2958 13.4087 50.4093 15.407 49.2875 15.6925C49.2406 15.6328 49.1937 15.5732 49.1425 15.5135C30.7847 -1.32486 1.11964 21.6916 18.4068 43.9453C18.6073 44.1498 18.8035 44.3586 18.9997 44.5717C17.477 44.9935 10.9724 46.8043 10.9724 46.8043L8.97203 39.6292C8.97203 39.6292 8.96348 39.6164 8.95922 39.6079C10.2303 38.4405 9.17676 35.7605 7.12942 36.3612C4.97545 36.9279 5.60245 39.9956 7.47491 40.1149L9.64595 47.9078C9.74832 48.2827 10.1748 48.4873 10.5928 48.3722L19.695 45.8413C19.8144 45.8115 19.9125 45.7604 19.9935 45.7007C20.4627 46.2632 20.9106 46.8511 21.32 47.4604C17.2723 47.9121 4.10533 52.4114 3.7897 52.1813L3.08594 49.6547C3.07314 49.6078 3.05609 49.5652 3.03903 49.5269C4.53614 48.4404 3.48262 45.5346 1.3585 46.1566C-0.795465 46.7233 -0.168491 49.7996 1.70823 49.9103C1.7125 49.9487 1.71679 49.987 1.72958 50.0296C2.10066 50.5835 2.26701 54.154 3.48688 53.7194C3.70867 53.3317 18.6286 50.085 21.8958 48.3765C22.2882 49.0412 22.6337 49.7357 22.928 50.4642C19.6054 50.6389 6.93749 54.8741 4.79205 55.3257C4.38685 54.742 3.68308 54.3798 2.7959 54.6397C0.398813 55.2703 1.43953 59.0155 3.81956 58.321C4.77071 58.0696 5.17594 57.3283 5.17167 56.5656C7.36403 55.8157 20.484 52.8971 23.2565 51.3419C22.1603 51.9896 21.5248 53.0207 21.303 54.1285C17.8993 54.9508 12.8534 56.7531 12.5122 56.6423C10.9724 56.8766 13.0027 60.5366 12.943 61.2737L10.6483 61.9128C10.2559 61.2652 9.53077 60.8434 8.58814 61.1203C6.19105 61.7509 7.23179 65.4961 9.61182 64.8016C10.4649 64.5758 10.8744 63.958 10.9511 63.289C15.997 62.0491 14.8496 62.39 13.6894 57.7756C13.9496 57.5115 18.2064 56.6636 21.2816 55.7518C21.5248 57.2473 22.4887 58.632 24.1181 59.1646C23.4399 60.7241 23.8749 62.7436 25.0735 63.8813H25.0777C25.9009 64.7121 27.0867 65.2021 28.3279 65.1595C27.0057 70.5152 32.1155 71.3205 36.176 70.9072C39.0977 70.9583 41.2858 67.8949 40.3006 65.1595C41.546 65.2021 42.7275 64.7121 43.5507 63.8813H43.555C44.7535 62.7436 45.1928 60.7241 44.5104 59.1646C47.9311 58.0441 48.4686 53.1783 45.3677 51.3505C46.3274 48.4873 48.0932 46.1013 50.1662 44.022C51.0363 42.8375 51.804 41.6531 52.4779 40.4643H57.511V56.0586H61.9639V40.4643H68.1187V36.8427H54.1926C55.2419 34.0604 55.6726 31.2526 55.3442 28.3596L62.7786 26.4764C64.4463 31.3975 62.4886 32.5522 68.1017 30.8905C68.5922 31.5509 69.3983 31.9514 70.4305 31.6744C73.3693 30.9714 72.2049 26.3826 69.2874 27.1623L69.296 27.1581ZM71.8594 18.2404C72.9257 17.9549 73.3522 19.6294 72.2774 19.8893C71.2111 20.1747 70.7845 18.5003 71.8594 18.2404ZM68.6562 10.0428C67.5898 10.3282 67.1633 8.65376 68.2382 8.39385C69.3045 8.10839 69.731 9.78285 68.6562 10.0428ZM56.6195 3.17872C55.5532 3.46419 55.1267 1.78972 56.2015 1.52982C57.2678 1.24435 57.6944 2.91881 56.6195 3.17872ZM7.84172 38.8751C6.9716 39.1307 6.59199 37.763 7.46637 37.5329C8.33649 37.2773 8.7161 38.645 7.84172 38.8751ZM2.0708 48.6705C1.20068 48.9261 0.821069 47.5584 1.69545 47.3283C2.56557 47.0727 2.94518 48.4404 2.0708 48.6705ZM3.5082 57.1578C2.63808 57.4135 2.25847 56.0458 3.13285 55.8157C4.00297 55.5601 4.38258 56.9277 3.5082 57.1578ZM9.30046 63.6341C8.43034 63.8898 8.05073 62.5221 8.92512 62.292C9.79523 62.0364 10.1748 63.4041 9.30046 63.6341ZM22.3864 22.4415C22.3864 20.8778 23.6489 19.6677 25.5725 19.6677C27.4962 19.6677 28.7587 20.7926 28.7587 22.3562C28.7587 24.0051 27.4962 25.2109 25.5725 25.2109C23.6489 25.2109 22.3864 24.0051 22.3864 22.4372V22.4415ZM22.9622 41.7383V26.8598H28.1829V41.7383H22.9622ZM36.0267 68.3508H32.6273C30.9724 68.3678 30.9681 65.773 32.6273 65.7943C32.6358 65.7986 36.0395 65.7858 36.0438 65.7943C37.7158 65.8625 37.703 68.3039 36.0267 68.3508ZM39.9508 62.603H36.0267C34.214 62.603 30.5245 62.603 28.7032 62.603C27.0313 62.5732 27.0184 60.0935 28.6862 60.0466H39.9678C41.6398 60.0977 41.6185 62.5775 39.9508 62.603ZM42.3308 56.8553C39.3067 56.8553 29.2364 56.8553 26.3232 56.8553C24.6342 56.8085 24.6427 54.3458 26.3232 54.2989H42.3308C43.99 54.2818 43.9858 56.8766 42.3308 56.8553ZM36.5386 42.126C34.3931 42.126 32.3074 41.6317 30.9041 40.7242L32.8832 36.8257C33.9837 37.5926 35.1907 37.8141 36.4277 37.8141C39.1489 37.8141 40.9617 36.276 41.2645 33.3659C40.1939 34.2735 38.7651 34.7677 36.948 34.7677C33.3226 34.7677 30.324 32.3775 30.324 28.7005C30.324 24.6911 33.6766 22.1389 37.8523 22.1389C43.2649 22.1389 46.7838 25.3771 46.7838 31.6105C46.7838 38.3084 42.6337 42.126 36.5343 42.126H36.5386ZM69.6628 28.5939C70.7291 28.3085 71.1556 29.9829 70.0808 30.2428C69.0145 30.5283 68.5879 28.8538 69.6628 28.5939Z"
        fill={color}
      />
      <path
        d="M125.444 49.1221C125.436 48.9986 125.393 48.8793 125.308 48.7813L126.754 44.4992H124.804L119.17 61.1075L113.51 44.4992H111.612L105.867 61.0266L102.51 51.5039H100.42C99.4046 52.4668 98.2743 52.9312 96.709 52.9312C94.4569 52.9312 92.8873 51.8064 92.4778 49.9657H103.661C103.687 49.6078 103.742 49.1434 103.742 48.8111C103.742 44.0604 100.39 41.1503 96.0479 41.1503C91.7058 41.1503 88.1613 44.3331 88.1613 48.7557C88.1613 53.1783 91.4883 56.3611 96.5981 56.3611C98.6454 56.3611 100.33 55.8711 101.627 54.938L104.711 63.7108H106.826L112.486 47.3241L118.121 63.7108H120.266L120.45 63.1697H120.454C120.71 63.2549 120.919 63.1697 121.064 63.0249C125.875 64.4352 129.326 60.9414 130.012 57.03C130.102 56.9832 130.166 56.9065 130.166 56.7659L130.089 56.4719C130.413 53.4553 129.07 50.3364 125.44 49.1221H125.444ZM96.082 44.3927C98.0056 44.3927 99.4089 45.5985 99.7074 47.469H92.4266C92.7294 45.5729 94.1285 44.3927 96.082 44.3927ZM124.668 61.5634C123.981 62.1045 123.661 62.5051 123.717 62.7351C122.953 62.8033 122.134 62.7309 121.264 62.4837C121.247 62.2622 121.123 62.0577 120.855 61.9682L121.635 59.6546C121.674 59.6674 121.712 59.6802 121.759 59.6887C122.561 59.6674 122.612 59.9358 123.491 60.298C124.557 60.4812 125.009 60.5962 124.664 61.5634H124.668ZM126.238 61.9085C126.327 61.2396 126.011 60.396 125.534 59.9529C125.359 59.4842 125.615 58.6278 124.988 58.3977C124.109 58.2486 123.312 59.6333 122.313 59.186C122.164 59.0965 121.985 59.0837 121.823 59.1178L124.962 49.8209C125.073 49.7953 125.167 49.7357 125.244 49.659C126.455 50.068 127.393 50.6986 128.08 51.474C127.871 51.457 127.662 51.4229 127.504 51.278C126.25 50.6986 126.395 52.1813 126.86 52.7778C126.289 52.863 125.632 51.9555 124.839 52.3475C123.742 52.6244 123.533 53.6768 124.63 54.0986C126.097 54.7804 125.312 55.8413 126.933 56.2844C123.137 58.9431 127.457 59.497 128.831 57.307C128.886 57.0982 129.155 57.0982 129.436 57.1067C129.053 59.0624 127.922 60.886 126.242 61.9128L126.238 61.9085Z"
        fill={color}
      />
      <path
        d="M133.488 52.1004V49.2712H131.62V63.7108H133.57V56.3526C133.57 52.9482 135.412 51.0267 138.432 51.0267C138.568 51.0267 138.735 51.0522 138.901 51.0522V49.1562C136.235 49.1562 134.393 50.1702 133.488 52.0918V52.1004Z"
        fill={color}
      />
      <path d="M144.369 43.3446H142.42V63.7151H144.369V43.3446Z" fill={color} />
      <path
        d="M161.051 43.3446V52.0194C159.844 50.1532 157.865 49.1647 155.553 49.1647C151.433 49.1647 148.353 52.1302 148.353 56.4932C148.353 60.8561 151.433 63.8514 155.553 63.8514C157.946 63.8514 159.95 62.8076 161.132 60.8604V63.7151H163V43.3446H161.051ZM155.719 62.1216C152.64 62.1216 150.332 59.8719 150.332 56.4932C150.332 53.1144 152.64 50.8647 155.719 50.8647C158.799 50.8647 161.076 53.1144 161.076 56.4932C161.076 59.8719 158.769 62.1216 155.719 62.1216Z"
        fill={color}
      />
      <path
        d="M79.2042 41.0651C77.3062 41.0651 75.6598 41.6701 74.5039 42.8205V35.6838H70.2173V56.0543H74.5039V48.7514C74.5039 46.0331 75.9882 44.7719 78.0483 44.7719C79.9464 44.7719 81.0426 45.8712 81.0426 48.2572V56.0543H85.3292V47.601C85.3292 43.0974 82.689 41.0693 79.2 41.0693L79.2042 41.0651Z"
        fill={color}
      />
      <path
        d="M38.2106 26.0034C36.6708 26.0034 35.6002 26.9365 35.6002 28.4448C35.6002 29.9531 36.6708 30.8606 38.2404 30.8606C39.8101 30.8606 40.9062 29.8722 40.9062 28.4193C40.9062 26.9663 39.8612 26.0034 38.2148 26.0034H38.2106Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;

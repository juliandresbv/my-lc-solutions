function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
  const users = new Set(username);
  
  const userPatternsMap = new Map();
  
  for (const user of users) {
      let from = username.indexOf(user);
      let to = username.lastIndexOf(user);
      
      if (from > -1 && to > -1) {
          const userWebs = website.slice(from, to + 1);
          
          if (userWebs.length > 0) {
              userWebs
              let webIndex1 = 0;
              let webIndex2 = webIndex1 + 1;
              let webIndex3 = webIndex2 + 1;
              
              while (
                  webIndex1 <= userWebs.length
                  && webIndex2 <= userWebs.length - 2
                  && webIndex3 <= userWebs.length
              ) {
                  webIndex1
                  webIndex2
                  webIndex3
                  
                  let pattern = [
                      userWebs[webIndex1],
                      userWebs[webIndex2],
                      userWebs[webIndex3]
                  ];
                  pattern
                  
                  let userPatterns = userPatternsMap.get(user);
                  // userPatterns
                  
                  if (userPatterns != null) {
                      userPatternsMap.set(user, [...userPatterns, pattern]);
                  } else {
                      userPatternsMap.set(user, [pattern]);
                  }
                  
                  webIndex3
                  ++webIndex3;
                  webIndex3
                  
                  if (webIndex3 == userWebs.length) {
                      ++webIndex2;
                      webIndex2

                      webIndex3 = webIndex2 + 1;
                      webIndex3
                  }
                  webIndex2

                  if (webIndex2 == userWebs.length - 1) {
                      webIndex1
                      ++webIndex1;
                      webIndex1

                      webIndex2 = webIndex1 + 1;
                      webIndex2
                  }

                  webIndex1
                  webIndex2
                  webIndex3
              }
          }
      }
  }
  
  userPatternsMap
};

mostVisitedPattern(['j','j','j','j'], [1,2,3], ['w1','w2','w3','w4'])
import RadioButtonGroup from "@/shared/formElements/RadioButtonGroup";
import type { WebsiteDetailProps } from "./WebsiteDetail";
import { formKeys } from "@/constants/formKeys";
import { label } from "@/constants/label";
import TextInput from "@/shared/formElements/TextInput";
import TextAreaInput from "@/shared/formElements/TextAreaInput";

const ArticleSpecification = ({ control, watch }: WebsiteDetailProps) => {
  const noOfWordsWatch = watch!(formKeys.noOfWords);
  const noOfLinksWatch = watch!(formKeys.noOfLinksAdvertise);

  const provideContent = noOfWordsWatch === "2";
  const maxLinkAdvertise = noOfLinksWatch === "2";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-[600] text-[24px] leading-[40px]">
        {"Article specification"}
      </h3>

      <div className="grid grid-cols-2 max-w-[967px] shadow-[0px_1px_2px_0px_#0000000D] rounded-md p-4">
        {/* Left Column */}
        <div className="grid grid-cols-6 gap-y-8 space-x-8">
          <div className="col-span-6">
            <RadioButtonGroup
              name={formKeys.writingArticleIncluded}
              control={control}
              label={label.writingArticleIncluded}
              options={[
                { value: "1", label: "Yes" },
                {
                  value: "2",
                  label:
                    "No, the advertiser (client) needs to provide the content"
                }
              ]}
            />
          </div>

          <div className="col-span-6 flex flex-col gap-3">
            <RadioButtonGroup
              name={formKeys.noOfWords}
              control={control}
              label={label.noOfWords}
              options={[
                { value: "1", label: "Length of the article is not limited." },
                {
                  value: "2",
                  label:
                    "No, the advertiser (client) needs to provide the content"
                }
              ]}
            />
            <div className="flex gap-12 ml-5">
              <TextInput
                control={control}
                name={formKeys.wordMin}
                placeholder="Min"
                className="w-[95px]"
                disabled={!provideContent}
              />
              <TextInput
                control={control}
                name={formKeys.wordMax}
                placeholder="Max"
                className="w-[95px]"
                disabled={!provideContent}
              />
            </div>
          </div>

          <div className="col-span-6">
            <RadioButtonGroup
              name={formKeys.allowDoFollow}
              control={control}
              label={label.allowDoFollow}
              options={[
                { value: "1", label: "Yes" },
                { value: "2", label: "No" }
              ]}
            />
          </div>

          <div className="col-span-6">
            <RadioButtonGroup
              name={formKeys.typesOfLink}
              control={control}
              label={label.typesOfLink}
              options={[
                {
                  value: "1",
                  label: "Only brand links, URL, navigational, graphic links."
                },
                { value: "2", label: "Only branded and generic links." },
                {
                  value: "3",
                  label: "Also mixed links (partly exact match anchors)."
                },
                {
                  value: "4",
                  label: "All links, including exact match anchors."
                }
              ]}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-6 gap-y-8 space-x-8">
          <div className="col-span-6">
            <RadioButtonGroup
              name={formKeys.taggingArticle}
              control={control}
              label={label.taggingArticle}
              options={[
                { value: "1", label: "We do not tag paid articles." },
                {
                  value: "2",
                  label: "Articles are tagged only at the advertiser's request."
                },
                {
                  value: "3",
                  label: "We always tag articles: 'Sponsored article'."
                },
                {
                  value: "4",
                  label: "All links, including exact match anchors."
                }
              ]}
            />
          </div>

          <div className="col-span-6 flex flex-col gap-3">
            <RadioButtonGroup
              name={formKeys.noOfLinksAdvertise}
              control={control}
              label={label.noOfLinksAdvertise}
              options={[
                { value: "1", label: "We do not tag paid articles." },
                {
                  value: "2",
                  label: "A maximum number of links to the advertiser:"
                }
              ]}
            />
            <div className="flex gap-12 ml-5">
              <TextInput
                control={control}
                name={formKeys.linksMin}
                placeholder="Min"
                className="w-[95px]"
                disabled={!maxLinkAdvertise}
              />
              <TextInput
                control={control}
                name={formKeys.linksMax}
                placeholder="Max"
                className="w-[95px]"
                disabled={!maxLinkAdvertise}
              />
            </div>
          </div>

          <div className="col-span-6">
            <RadioButtonGroup
              name={formKeys.otherLinks}
              control={control}
              label={label.otherLinks}
              options={[
                {
                  value: "1",
                  label:
                    "We allow links to other websites in the content of the article."
                },
                {
                  value: "2",
                  label:
                    "We DO NOT allow links to other websites in the content of the article."
                }
              ]}
            />
          </div>

          <div className="col-span-6">
            <TextAreaInput
              name={formKeys.otherContent}
              control={control}
              label={label.otherContent}
              placeholder="Description"
              labelSx="!font-[400]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSpecification;
